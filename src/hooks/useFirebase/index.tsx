import { addDoc, arrayUnion, collection, deleteDoc, deleteField, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where, writeBatch } from '@firebase/firestore'
import { useContext, useState } from 'react'
import { FirebaseContext } from '@src/context/FirebaseContext'

export function useFirebase () {
  const { firestore } = useContext(FirebaseContext)

  async function getAllFirestoreData (path: string) {
    try {
      if (firestore === undefined) { throw new Error('firestore === undefined') }
      const snapshot = await getDocs(collection(firestore, path))

      const result = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })

      return { result }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    getAllFirestoreData
  }
}
