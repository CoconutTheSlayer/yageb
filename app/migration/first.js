import CatModel from '../models/cat.js';
import Faker from 'faker';


function migrate(){
    //delete all the cats then create bunch of new ones
    CatModel.remove({}).exec().then(()=>{
        for(let i = 0 ; i < 10 ; i++){
            let cat = new CatModel({
                name: Faker.name.firstName()
            });

            cat.save((err)=>{
                if(err){
                    console.log('error',err);
                }else{
                    console.log('cat created');
                }
            });
        }
    });
}

export default migrate;
