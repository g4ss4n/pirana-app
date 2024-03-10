import React from 'react';
import CodeExplanation from '../codeExplanation/CodeExplanation';
import Title from '../title/Title';
import Body from '../body/Body';
const SingleQuerySP = () => {
    const codeLines = [
        {
            code: <text>
                t := n/N 
                &nbsp; &nbsp; &nbsp;
                r := i<sup>*</sup>%N
                &nbsp; &nbsp; &nbsp;
                c := ⌈i<sup>*</sup>/N⌉             </text>, explanation: <text>t = 3 &nbsp; &nbsp; r = 0 &nbsp; &nbsp; c = 1 <br />
                The client calculates that Element 3 is in row 0 and column 1.</text>
        },
        {
            code: <text>x ∈ CW(m, k)<br />
                Find the k positions [i<sub>1</sub>, ..., i<sub>k</sub>] in x, where x[i] = 1             </text>, 
                explanation: <text> encodes the column index c = 2 into a constant- weight codeword x, for example CW(4, 2), => x = 0110.< br />< br />
Then, we find the k positions in CW codeword that has 1     </text >
        },

        {
            code: <text>for j := 1, ..., m do <br />
                &nbsp; &nbsp; &nbsp; for h := 1, ..., N do <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;if j ∈ [i<sub>1</sub>, ..., i<sub>k</sub>] and h = r then<br /> 
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;q<sub>j</sub>[h] := 1 <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;else<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;q<sub>j</sub> [h] := 0 <br />
                &nbsp; &nbsp; &nbsp; qej ← SIMDEnc(q<sub>j</sub>)
            </text>,
            explanation: <text>Based on x and the row index r = 0, the client generates SIMD ciphertexts. Let's say these ciphertexts are:<br />
                <ol>
                    <li>SIMD Ciphertext qe0: SIMDEnq([0, 0, 0, 0])</li>  
                    <li>SIMD Ciphertext qe1: SIMDEnq([1, 0, 0, 0])</li>  
                    <li>SIMD Ciphertext qe2: SIMDEnq([1, 0, 0, 0])</li>  
                    <li>SIMD Ciphertext qe3: SIMDEnq([0, 0, 0, 0])</li>  
                </ol>
The client send qe=[qe0, qe1, qe2, qe3] to server            </text>
        },

    ]
    const codeLines2 = [
        {
            code: <text>Init [d<sub>1</sub>, ..., d<sub>t</sub>] : each dj is [pl<sub>(j−1)N+1</sub>, ..., pl<sub>jN</sub>] </text>,
            explanation: <text>Upon receiving the query, the server processes each column of the database matrix.</text>
        },
        {
            code: <text>for j := 1, ..., t do <br />
            </text>,
            explanation: <text>For each one of the column in the matrix (In this example we have 3 columns) do:
            </text>
        },
        {
            code: <text>
                &nbsp; &nbsp; &nbsp; yj ∈ CW(m, k) ← run Algorithm 1 with j ∈[t]

            </text>,
            explanation: <text>We encode the column indices j to a constant-weight codewords y<sub>j</sub>, so at the end of the loop we get t constant-weight codewords [y<sub>1</sub>, ..., y<sub>t</sub>], that encodes the column indices [1, ..., t].
            </text>
        },
        {
            code: <text>&nbsp; &nbsp; &nbsp; Find k positions [i<sub>1</sub>, ..., i<sub>k</sub>] in y<sub>j</sub> , where y<sub>j</sub>[i] = 1<br />
                        &nbsp; &nbsp; &nbsp; wej ← SIMDMul(qe<sub>i1</sub>, ..., qe<sub>ik</sub>) <br />
                        </text>,
            explanation: <text>It performs equality operations on the SIMD ciphertexts received from the client and the constant-weight codewords y<sub>j</sub>, the result is t SIMD ciphertexts (3 ciphertexts in this example), where only the r-th slot (which is 0 in this example) is 1 and all other slots are 0s.<br />
            <ol>
                <li>we0:  SIMD ciphertext([1, 0, 0, 0])</li>
                <li>we1:  SIMD ciphertext([1, 0, 0, 0])</li>
                <li>we2:  SIMD ciphertext([1, 0, 0, 0])</li>
            </ol>
            Note that the server has now the same t SIMD ciphertexts as in the aforementioned naive solution.
            </text>
        },
        {
            code: <text>&nbsp; &nbsp; &nbsp; wej ← SIMDPmul(we<sub>j</sub>, d<sub>j</sub>)</text>,
            explanation: <text>We multiplies the j-th column of the database (d<sub>j</sub>) to we<sub>j</sub>.<br />
                <ol>
                    <li>ue0:  SIMD ciphertext([Element 0, 0, 0, 0])</li>
                    <li>ue1:  SIMD ciphertext([Element 3, 0, 0, 0])</li>
                    <li>ue2:  SIMD ciphertext([Element 6, 0, 0, 0])</li>
                </ol>
            </text>
        },
        {
            code: <text>ve ← SIMDAdd(ue<sub>1</sub>, ..., ue<sub>t</sub>)
            </text>,
            explanation: <text>We adds the products of all columns together<br />
                ve: <br /> SIMD ciphertext([Element 0, Element 3, Element 6])
            </text >
        },
        {
            code: <text>return ve</text>,
            explanation: <text> The server sends ve to the client, which decrypts ve, and output the payload based on the column encrypted in x, identifying the payload associated with Element 3.</text >
        },

    ];

    return (
        <div>
        <Title>Single-Query Small Payload PIRANA</Title>
        <Body>
        <p>
        We first consider the case that the payload size is smaller than the slot size(bit-size of plaintext modulus), |pl| ≤ p.
        </p>
        <p>
        <strong>Intuition.</strong> We arrange the n elements of the database into a matrix of N rows and t := ⌈n/N⌉ columns (for simplicity, we assume N divides n), s.t., the i-th element is in row r := i%N and column c := ⌈i/N⌉.
        </p>
        <p>
        Naively, we can have C send t SIMD ciphertexts, where only the r-th slot of the c-th ciphertext is 1 and all other slots are 0s; S simply multiplies each column to each ciphertext and adds the products together. Then, the payload pli ∗ that C wants to retrieve is in the r-th slot of the resulting ciphertext. However, in this way, C needs to send t ciphertexts to S. We want to reduce the number of ciphertexts to be sent.
        </p>
        <p>To this end, we use the following algorithm:
        </p>
        <p>
            <strong>Setup:</strong>
        </p>
        <p>
        Parameters for homomorphic encryption are chosen, and keys are generated. S arranges its database
        into a matrix of N rows and t := n/N columns.<br /> <br/>
        Lets assume we have 9 element in th database, the server arranges its database into a matrix with 3 rows and 3 columns: <br /> <br />
                    Element 0 &nbsp;&nbsp;&nbsp;&nbsp; <strong>Element 3</strong> &nbsp;&nbsp;&nbsp;&nbsp; Element 6<br />
                Element 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Element 4 &nbsp;&nbsp;&nbsp;&nbsp; Element 7<br />
                    Element 2 &nbsp;&nbsp;&nbsp;&nbsp; Element 5 &nbsp;&nbsp;&nbsp;&nbsp; Element 8<br /><br />
                    N = 3 &nbsp; &nbsp;&nbsp; (number of rows)<br />
                    m = 4 &nbsp; &nbsp; (number of slots in the ciphertext)<br />
                    k = 2 &nbsp; &nbsp; &nbsp; (weight of the constant-weight codeword)<br />
                    n = 9 &nbsp; &nbsp; &nbsp; (total number of elements in the database)<br /><br />
                    Let i<sup>*</sup> be the 3rd element

                
        </p>

        <p>
        <strong>Query:</strong>
        </p>
        <p>
        <text><strong>Input: </strong>i<sup>*</sup><br /><strong>Output: </strong>[qe<sub>1</sub>, ..., qe<sub>m</sub>]</text>
        </p>

        </Body>
            
            <CodeExplanation codeLines={codeLines} />
            
            <body><strong>Answer:</strong>
            <p>

            <text><strong>Input: </strong>[qe<sub>1</sub>, ..., qe<sub>m</sub>], [pl<sub>1</sub>, ..., pl<sub>n</sub>]<br /><strong>Output: </strong>ve : v[i<sup>*</sup>%N] = pl<sub>i</sub><sup>*</sup> and other slots of v are 0s</text>
            </p>
            </body>
            <CodeExplanation codeLines={codeLines2} />
        </div>
    );
};

export default SingleQuerySP;