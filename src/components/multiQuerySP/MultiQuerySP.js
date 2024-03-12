import React from 'react';
import CodeExplanation from '../codeExplanation/CodeExplanation';
import Title from '../title/Title';
import Body from '../body/Body';
const MultiQuerySP = () => {
    
    const codeLines = [

        {
            code: <text>
                 [i<sup>'</sup><sub>1</sub>,...,i<sup>'</sup><sub>N</sub>]{"\u2190"}GenSchedule([i<sup>*</sup><sub>1</sub>,...,i<sup>*</sup><sub>L</sub>])
           </text>, 
                explanation: <text>Given L original indices [i<sup>*</sup><sub>1</sub> , ..., i<sup>*</sup><sub>L</sub> ], C first runs GenSchedule of the batch code to generate indices [i′′<sub>1</sub> , ..., i′′<sub>B</sub>] for each of the B buckets.<br /><br/>
                If the buckets has been split into N small buckets, the corresponding indices [i′<sub>1</sub> , ..., i′<sub>N</sub>] should be calculated</text>
        },
        {
            code: <text>
                for h:=1,...,N do
            </text >,
            explanation: <text>We run in a similar way as in Algorithm Single-query PIRANA: Query, except that it needs to do that for each one of the N slots</text>
        },
        {
            code: <text>&nbsp; &nbsp; &nbsp;x<sub>h</sub> ∈ CW(m, k) {"\u2190"} run CW with i<sup>'</sup><sub>h</sub>∈[M/N]<br />
                Find the k positions [i<sub>1</sub>, ..., i<sub>k</sub>] in x<sub>h</sub>, where x<sub>h</sub>[i] = 1             </text>, 
            explanation: <text>First we compute a constant-weight codeword x<sub>h</sub> for each of the N slots.<br />
            <br/>Use x<sub>h</sub> to determine the value for that slot and find the k positions [i<sub>1</sub>, ..., i<sub>k</sub>] where x<sub>h</sub>[i]=1 </text >

        },

        {
            code: <text>&nbsp; &nbsp; &nbsp;for j := 1, ..., m do <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;if j ∈ [i<sub>1</sub>, ..., i<sub>k</sub>] then<br /> 
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;q<sub>j</sub>[h] := 1 <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;else<br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;q<sub>j</sub>[h] := 0 <br />

            </text>,
            explanation: <text>Iterate over each slot j in the ciphertext:<br />
            If j is in the set [i<sub>1</sub>, ..., i<sub>k</sub>], set q<sub>j</sub> [h] = 1, else set q<sub>j</sub>[h] = 0, here we can see the improvement of the algorithm, because now we use more slots to get other queries.</text>
        },
        {
        code: <text>for j := 1, ..., m do <br />
        &nbsp; &nbsp; &nbsp; qe<sub>j</sub> ← SIMDEnc(q<sub>j</sub>)
    </text>,
    explanation: <text>For each one of the m vectors, Encrypt the resulting vector q<sub>j</sub> to get qe<sub>j</sub> using  SIMDEnc(q<sub>j</sub>), as a result we get m encrypted vectors.</text>
},
    ]
    const codeLines2 = [
        {
            code: <text>t := M/N </text>,
            explanation: <text>t = 3n/N.</text>
        },
        {
            code: <text>Init [d<sub>1</sub>, ..., dt] : each dj is [C<sub>1</sub>[j], ..., C<sub>N</sub>[j]] </text>,
            explanation: <text>Upon receiving the query, the server processes each column of the database matrix.<br />
            Note that d<sub>j</sub> is a combination of the j-th elements in each bucket.</text>
        },
        {
            code: <text>for j := 1, ..., t do <br />
            </text>,
            explanation: <text>For each one of the 3n/N columns in the matrix do:
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
            code: <text>
                        &nbsp; &nbsp; &nbsp; Find k positions [i<sub>1</sub>, ..., i<sub>k</sub>] in y<sub>j</sub> , where y<sub>j</sub>[i] = 1<br />
                        &nbsp; &nbsp; &nbsp; wej ← SIMDMul(qe<sub>i1</sub>, ..., qe<sub>ik</sub>) <br />
                        &nbsp; &nbsp; &nbsp; wej ← SIMDPmul(we<sub>j</sub>, d<sub>j</sub>)<br/>
                        ve ← SIMDAdd(ue<sub>1</sub>, ..., ue<sub>t</sub>)</text>, 
            explanation: <text>The Server runs this Algorithm to answer these L queries in a batch. It is runs mostly the same as Algorithm (Single-query PIRANA: Answer).<br />
            <br/>Here we encode the column indices j to a constant-weight codewords y<sub>j</sub>, then we perform equality operations on the SIMD ciphertexts received from the client and the constant-weight codewords y<sub>j</sub>, the result is t SIMD ciphertexts.<br /><br/>
            We multiplies the j-th column of the database (d<sub>j</sub>) to we<sub>j</sub>.
            Then, we add the products of all columns together
            </text>
        },

        {
            code: <text>return ve</text>,
            explanation: <text> The server sends ve to the client, then the client decrypts ve (vector of N codewords, one for each of the N buckets) and gets [C<sub>1</sub>[i′<sub>1</sub>], ..., C<sub>B</sub>[i′<sub>N</sub>]].<br /> <br/>
            Then, it runs:<br /> pl<sub>i<sup>*</sup><sub>1</sub></sub> , ..., pl<sub>i<sup>*</sup><sub>L</sub></sub> ← Decode(C<sub>1</sub>[i′<sub>1</sub>], ..., C<sub>B</sub>[i′<sub>N</sub>]).<br />
            which takes N codewords and outputs L payloads</text >
        },

    ];

    return (
        <div>
            <Title>Multi-Query Small Payload PIRANA</Title>
            <Body>
            <p>
            Recall that in our single-query PIRANA, C sends m SIMD ciphertexts to S; only one slot in each ciphertext is useful and other slots are empty. Then, a natural question to ask is that can we use other slots to batch more queries?
            </p>
            <p>
            The answer is no because there may be multiple desired elements reside on the same row, rendering the query invalid
            </p>
            <p>
            Thanks to the batch code, we could encode S’s database into a BC-(n, M, L, B) and treat each bucket as a “row”; then, the desired elements are for sure in different rows. 
            </p>
            <p>
            We use 3-way cuckoo hashing as the batch code to  encodes n elements into M = 3n codewords distributed among B = 1.5L buckets.<br /> 
            If we set B = N, we could maximize the number queries L = N/1.5 and minimize the bucket size 3n/N. <br /> <br />
            The number of columns determines both computational and communication costs, and it increases from n/N (in single-query PIRANA) to 3n/N. <br /><br />
            Therefore, we are able to retrieve up to ⌊N/1.5⌋ elements with only 3× higher computational cost and almost the same communication cost compared to running the single-query PIRANA once (for small payloads with |pl| ≤ p).
            </p>

            <p>
                <strong>Setup:</strong>
            </p>
            <p>
            Parameters for the homomorphic encryption are chosen and keys are generated. 
            S encodes its database using a batch code BC(n, M, L, B): 
            </p>
            <div style={{ textAlign: 'center' }}>
            <p>
            [C<sub>1</sub>, ..., C<sub>B</sub>] ← Encode([pl<sub>1</sub>, ..., pl<sub>n</sub>])
            </p></div>
            <p>
            where C<sub>i</sub> denotes vectors of codewords in the i-th bucket. If B {"<"} N, it splits each bucket into s := N/B small buckets (for simplicity, we assume B divides N). That means the database is in fact encoded as:
            </p>
            <div style={{ textAlign: 'center' }}>
            <p>
            [C<sub>1</sub>, ..., C<sub>N</sub> ] ← Encode([pl<sub>1</sub>, ..., pl<sub>n</sub>])
            </p></div>
            <p>
            <strong>Query:</strong>
            </p>
            <p>
            <text><strong>Input: </strong>[i<sup>*</sup><sub>1</sub>,...,i<sup>*</sup><sub>L</sub>]<br /><strong>Output: </strong>[qe1, ..., qem]</text>
            </p>
            </Body>
            <CodeExplanation codeLines={codeLines} />
            <body><strong>Answer:</strong>
            <p>
            <text><strong>Input: </strong>[qe<sub>1</sub>, ..., qe<sub>m</sub>], [C<sub>1</sub>, ..., C<sub>N</sub>]<br /><strong>Output: </strong>ve : v[j] = C<sub>j</sub>[i'<sub>j</sub>]</text>
            </p>
            </body>

            <CodeExplanation codeLines={codeLines2} />
        </div>
    );
};

export default MultiQuerySP;
