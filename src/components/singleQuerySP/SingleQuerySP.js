import React from 'react';
import CodeExplanation from '../codeExplanation/CodeExplanation';


const SingleQuerySP = () => {
    const codeLines = [
        {
            code: <text>Input: i<sup>*</sup><br />Output: [qe1, ..., qem]</text>, explanation:
                <text>Parameters for homomorphic encryption are chosen, and keys are generated.The server arranges its database into a matrix with 3 rows and 3 columns. <br /><br />
                    Element 0 &nbsp;&nbsp;&nbsp;&nbsp; Element 3 &nbsp;&nbsp;&nbsp;&nbsp; Element 6<br />
                Element 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Element 4 &nbsp;&nbsp;&nbsp;&nbsp; Element 7<br />
                    Element 2 &nbsp;&nbsp;&nbsp;&nbsp; Element 5 &nbsp;&nbsp;&nbsp;&nbsp; Element 8<br /><br />
                    N = 3 &nbsp; &nbsp;&nbsp; (number of rows)<br />
                    m = 4 &nbsp; &nbsp; (number of slots in the ciphertext)<br />
                    k = 2 &nbsp; &nbsp; &nbsp; (weight of the constant-weight codeword)<br />
                    n = 9 &nbsp; &nbsp; &nbsp; (total number of elements in the database)<br />
                    Let i<sup>*</sup> be the 3rd element

                </text>
        },
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
                Find the k positions [i1, ..., ik] in x, where x[i] = 1             </text>, explanation: <text> encodes the column index c = 2 into a constant- weight codeword x, for example CW(4, 2), => x = 0110.< br />< br />
Then, we find the k positions in CW codeword that has 1     </text >
        },

        {
            code: <text>for j := 1, ..., m do <br />
                &nbsp; &nbsp; &nbsp; for h := 1, ..., N do <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;if j ∈ [i1, ..., ik] and h = r then<br /> 
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;qj [h] := 1 <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;else<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;qj [h] := 0 <br />
                &nbsp; &nbsp; &nbsp; qej ← SIMDEnc(qj )
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
            code: <text>Input: [qe1, ..., qem], [pl1, ..., pln] <br />Output: ve : v[i∗%N] = pli∗ and other slots of v are 0s </text>,
            explanation:
                <text>Upon receiving the query, the server processes each column of the database matrix.
                </text>
        },
        {
            code: <text>Init [d1, ..., dt] : each dj is [pl_(j−1)N+1, ..., pl_jN] </text>,
            explanation: <text>t = 3 &nbsp; &nbsp; r = 0 &nbsp; &nbsp; c = 1 <br />
                The client calculates that Element 3 is in row 0 and column 1.</text>
        },
        {
            code: <text>x ∈ CW(m, k)<br />
                Find the k positions [i1, ..., ik] in x, where x[i] = 1             </text>,
            explanation: <text>For each column, the server encodes the column index into a constant-weight codeword yj.</text >
        },

        {
            code: <text>for j := 1, ..., t do <br />
                &nbsp; &nbsp; &nbsp; yj ∈ CW(m, k) ← run Algorithm 1 with j ∈[t]<br />
                &nbsp; &nbsp; &nbsp; Find k positions [i1, ..., ik] in yj , where yj [i] = 1<br />
                &nbsp; &nbsp; &nbsp; Find k positions[i1, ..., ik]in yj, where yj[i]= 1  <br />

            </text>,
            explanation: <text>It performs equality operations on the SIMD ciphertexts received from the client and the constant-weight codewords yj, the result is 3(t) SIMD ciphertexts (we), where only the 0-th (r-th) slot is 1 and all other slots are 0s.<br />
                <ol>
                    <li>we0:  SIMD ciphertext([1, 0, 0, 0])</li>
                    <li>we1:  SIMD ciphertext([1, 0, 0, 0])</li>
                    <li>we2:  SIMD ciphertext([1, 0, 0, 0])</li>
                </ol>
            </text>
        },
        {
            code: <text>&nbsp; &nbsp; &nbsp; wej ← SIMDMul(qei1, ..., qeik) <br />
                &nbsp; &nbsp; &nbsp; wej ← SIMDPmul(qei1, ..., qeik)</text>,
            explanation: <text>It performs equality operations on the SIMD ciphertexts received from the client and the constant-weight codewords yj, the result is 3(t) SIMD ciphertexts (we), where only the 0-th (r-th) slot is 1 and all other slots are 0s.<br />
                <ol>
                    <li>ue0:  SIMD ciphertext([Element 0, 0, 0, 0])</li>
                    <li>ue1:  SIMD ciphertext([Element 3, 0, 0, 0])</li>
                    <li>ue2:  SIMD ciphertext([Element 6, 0, 0, 0])</li>
                </ol>
            </text>
        },
        {
            code: <text>&nbsp; &nbsp; &nbsp; ve ← SIMDAdd(ue1, ..., uet)
            </text>,
            explanation: <text>we adds the products of all columns together<br />
                ve:  SIMD ciphertext([Element 0, Element 3, Element 6])
            </text >
        },
        {
            code: <text>return ve</text>,
            explanation: <text> the server sends ve to the client, which decrypts ve, and output the payload based on the column encrypted in x, identifying the payload associated with Element 3.</text >
        },

    ];

    return (
        <div>
            <h2>Single Query Small Payload PIRANA</h2>
            <CodeExplanation codeLines={codeLines} />
            <h2>Single Query Small Payload PIRANA - Answer</h2>
            <CodeExplanation codeLines={codeLines2} />
        </div>
    );
};

export default SingleQuerySP;