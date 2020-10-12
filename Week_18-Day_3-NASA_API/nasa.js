const request = require ('request');
​
const API_KEy ='T1dOqlZ7u2ZbvVQnGY5kBQw9enjatgmwVgdweK9u'
"https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-06-01&end_date=2020-06-06&api_key="
​
​
const getHazardousAsteroids =(startDate, endDate)=>{
​
    return new Promise((resolve, reject)=>{
​
        let array =[]
        request.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEy}`, 
        (err, res, body)=>{
            if(res.statusCode===200){
                const response = JSON.parse(body)
                const near = response.near_earth_objects
                const keys = Object.keys(near);
                for(let i=0;i<keys.length;i++){
                    const currentKey =keys[i]
                    const hazzard = near[currentKey].filter((value=> value.is_potentially_hazardous_asteroid ===true )).map((name =>name.name))
                    hazzard.length>0&&array.push(hazzard);
                }
​
                resolve(array);
            }else{
                reject("Error at fetching data ")
            }
​
        });
    });
};
​
​
getHazardousAsteroids("2020-09-23", "2020-09-30")
.then(data =>console.log(data))
.catch(err => console.log(err));