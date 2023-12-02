import { defineStore } from "pinia";


export const UseWebAPI = defineStore('userWebAPI',{
    state: () =>({
        coursesList:null,
    }),
    actions:{
        async setCourses(course){
            try {
                const resp = await fetch('https://courses-siteweb-default-rtdb.firebaseio.com/courses.json',{
                    method: 'PUT',
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