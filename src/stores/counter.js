
import { defineStore } from 'pinia'
import {createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut,
        onAuthStateChanged} from 'firebase/auth'
import { auth } from '../../firebaseConfig';
import router from '../router/index'

export const useUserStore = defineStore('userStore',{
  state:()=>({
    userData:null,
    loadingUser:false,
  }),
  actions:{
    async registerUser( email, password){
      this.loadingUser=true;
      try {

        const {user} = await createUserWithEmailAndPassword(auth, email ,password);
        this.userData={email:user.email,uid:user.uid}
        console.log(user)
        router.push('/mycourses')
      } catch (error) {
         console.log(error.code,'register')
         throw error; 
      }finally{
        this.loadingUser=false;
      }
    },
    async signInUser( email, password){
      this.loadingUser=true;
      try {
        const {user} = await signInWithEmailAndPassword(auth, email, password);
        this.userData={email:user.email,uid:user.uid}
        router.push('/mycourses')
      } catch (error) {
         console.log(error,'login') 
         throw error;
      }finally{
        this.loadingUser=false
      }
    },
    async logOutUser(){
      try {
        await signOut(auth)
        this.userData=null;
        router.push('/')
      } catch (error) {
        console.log(error,'logOut')
        throw error;
      }
    },
    currentUser(){
      
      return new Promise((resolve,reject)=>{
       
        onAuthStateChanged(auth, (user) =>{
          
          if(user){
            this.userData={
              email:user.email,
              uid: user.uid,
            }
            
          }else{
            this.userData=null;
          }

          resolve(user)
        }, (e) => reject(e))

       
      })
    }
  },
})
