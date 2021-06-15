import crypto from 'crypto'

const start = Date.now()
function logHashTime(password) {
    // Password-Based Key Derivation Function 2
    crypto.pbkdf2(password, 'salt', 100000, 512, 'sha512', (error, derivedKey) => {
        console.log(password, 'Hash generated at:', Date.now() - start)
    })
}

logHashTime('1')
logHashTime('2')
logHashTime('3')
logHashTime('4')
logHashTime('5')
logHashTime('6')
logHashTime('7')
logHashTime('8')