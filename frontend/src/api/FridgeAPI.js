// src/api/FridgeAPI.js
// Tyler Abbott
// 4/19/2021

const BASE_URL = "http://localhost:8000/fridge/"

function defaultGetInit(token){
  return {
    method: "GET",
    headers:{
      "Content-Type": "application/JSON",
      "Authorization": `JWT ${token}`
    }
  }
}

async function tryCatchFetch(url, init) {
  try {
    let response = await fetch(url, init)
    let data = await response.json()

    if(!response.ok) {
      let error = {
        status: response.status,
        statusText: response.statusText,
        message: data
      }
      throw(error)
    }
    return data
  }
  catch(error){
    console.error(error)
    return null
  }
}

async function login(credentials) {
  let init = {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON"
    },
    body: JSON.stringify(credentials)
  }
  let url = BASE_URL + "login/"

  return await tryCatchFetch(url, init)
}

async function signUp(credentials){
  let init = {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON"
    },
    body: JSON.stringify(credentials)
  }
  let url = BASE_URL + "users/"

  return await tryCatchFetch(url, init)
}

async function fetchFridge(fridgeId, token) {
  return await tryCatchFetch(BASE_URL + `fridges/${fridgeId}/`, defaultGetInit(token))
}

async function fetchIngredient(ingredientId, token) {
  return await tryCatchFetch(BASE_URL + `ingredients/${ingredientId}`, defaultGetInit(token))
}

async function fetchRecipes(ingredients, token){
  return await tryCatchFetch(BASE_URL + `recipe/${ingredients}`, defaultGetInit(token))
}

async function addIngredient(ingredientObject, token){
  return await fetch(BASE_URL + 'ingredients/', {
    headers: {
      'Content-Type': 'application/JSON',
      "Authorization": `JWT ${token}`
    },
    method: "POST",
    body: JSON.stringify(ingredientObject)
  })
}

async function deleteIngredient(ingredientId, token){
  return await fetch(BASE_URL + `ingredients/${ingredientId}`, {
    headers: {
      'Content-Type': 'application/JSON',
      "Authorization": `JWT ${token}`
    },
    method: "DELETE"
  })
}


export default {login, signUp, fetchFridge, fetchIngredient, fetchRecipes, addIngredient, deleteIngredient}