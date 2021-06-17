import crypto from 'crypto'

export function logHashTime(password) {
    const start = Date.now()
    return new Promise((resolve) => {
        // Password-Based Key Derivation Function 2
        crypto.pbkdf2(password, 'salt', 100000, 512, 'sha512', (error, derivedKey) => {
            console.log(password, 'Hash generated at:', Date.now() - start)
            resolve(`Hash generated at: ${Date.now() - start}`)
        })
    })
}
