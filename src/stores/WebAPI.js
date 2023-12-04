import { defineStore } from "pinia";


export const UseWebAPI = defineStore('userWebAPI',{
    state: () =>({
        coursesList:[],
    }),
    actions:{
        async getCourses(){
            try {
                const resp = await fetch('https://courses-siteweb-default-rtdb.firebaseio.com/courses.json')
                const dataDB = await resp.json()
                
                for(let  id in dataDB){
                    
                    this.coursesList.push(dataDB[id]);
                }
                console.log(this.coursesList)
            } catch (error) {
                console.log(error)
            }
        },
        async setCourses(course){
            try {
                const resp = await fetch('https://courses-siteweb-default-rtdb.firebaseio.com/courses.json',{
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(course)
                })
                
                const dataDB= await resp.json()
                console.log(dataDB)
                
            } catch (error) {
                console.log(error)
            }
        }
    }

})