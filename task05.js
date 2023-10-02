function range(start, end, step) {
    var result = [];

        if (step === undefined){
            step = 1;
        }
    
        if (step > 0) {
            for (var i = start; i <= end; i += step) {
                result.push(i);
            }
        } else if (step < 0) {
            for (var i = start; i >= end; i += step) {
                result.push(i);
            }
        }
    
        return(result)
    }
module.exports = {range}