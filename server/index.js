const express = require('express');
const cors = require('cors');

const port = process.env.port || 5000;

const app = express();

// middlewares 
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from index.js');
});

app.post( '/api', (req, res) => {

    let {array, target} = req.body;
    //console.log({array, target});
    let newArr = array.split(',').map( (e) => Number(e)  );
    let result = targetSum(newArr, Number(target))
    console.log({result});

    res.json({
        data : result,
        message : 'Success'
    });
});

// method to caculate the target sub array
function targetSum(array, target) {
   // console.log({array, target});
    let i = 0;
    let j = array.length - 1;
    let total = 0;
    let subArray = [];

    while(i < j){
       if( total + array[i] <= target){
           total = total + array[i];
           subArray.push(array[i]);
       }

       if( total + array[j] <= target){
           total = total + array[j];
           subArray.push(array[j]);
       }

       i = i + 1;
       j = j - 1;
    }

    //console.log({total, subArray});
    let res;
    return target === total ? subArray : null

}



app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});