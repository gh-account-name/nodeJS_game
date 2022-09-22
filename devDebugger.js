const devDebugger = {
    expect: function(value){
        return{
            willBe: expV =>{
                if (value === expV){
                    console.log(`Test №${this.testNum}\nResult: True\n`)
                } else {
                    console.error(`Test №${this.testNum}\nResult: False\nValue is ${value} (type: ${typeof(value)}), but expectation is ${expV} (type: ${typeof(expV)})\n`)
                }
                this.testNum++
            }
        }
    },
    testNum: 0,
}

module.exports = devDebugger;

