const app = require('./index')
const isAdminToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MjEzMjc4NTB9.IW5XZ7rbQQlKHPZpYb8Ee9cgbaXdvd7F0krGNRARGEQ`
const assert = something => {
  if (!something) {
    console.trace(something)
    //  throw new Error('assertion failed')
  }
}
const fetch = require('isomorphic-fetch')
;(async () => {
  await app

  const signUpResponse = await fetch('http://localhost:8080/account/signUp', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      email: 'john@doe.com',
      password: 'password',
      name: 'John Doe',
    }),
  })
  const signUpData = await signUpResponse.json()
  console.dir({ signUpData }, { depth: 7 })
  //  assert(typeof signUpData.data.jwt === 'string')
  //
  //

  const failedSignInResponse = await fetch('http://localhost:8080/account/signIn', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      email: 'wrongemail',
      password: 'password',
    }),
  })
  const failedSignInData = await failedSignInResponse.json()
  console.dir({ failedSignInData }, { depth: 7 })
  // assert(signInData.errors[0].code === 'ACCOUNT_NOT_FOUND')
  //
  //

  const wrongPasswordResponse = await fetch('http://localhost:8080/account/signIn', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      email: 'john@doe.com',
      password: 'asdfasdf',
    }),
  })
  const wrongPasswordResponseData = await wrongPasswordResponse.json()
  console.dir({ wrongPasswordResponseData }, { depth: 7 })
  // assert(typeof signInData.data.jwt === 'string')
  //
  //

  const signInResponse = await fetch('http://localhost:8080/account/signIn', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      email: 'john@doe.com',
      password: 'password',
    }),
  })
  const signInData = await signInResponse.json()
  console.dir({ signInData }, { depth: 7 })
  const token = signInData.data.jwt
  // assert(typeof signInData.data.jwt === 'string')
  //
  //
  /**
  
  const createListingResponse = await fetch('http://localhost:8080/listing/create', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'authorization': `Bearer ${token}` },
    body: JSON.stringify({
      location: 'Kyiv, st Blue',
      price: 20000,
      sleepingPlaces: 1,
      description: 'Blah blah',
    }),
  })
  const createListingData = await createListingResponse.json()
  console.dir({ createListingData }, { depth: 7 })
 */
  //
  //
  //

  const deleteListingResponse = await fetch('http://localhost:8080/listing/delete', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'authorization': `Bearer ${token}` },
    body: JSON.stringify({
      listingId: '60a3ff27297da6954ed978c1',
    }),
  })
  const deleteListingData = await deleteListingResponse.json()
  console.dir({ deleteListingData }, { depth: 7 })
  //
  //
  //
  const findListingResponse = await fetch('http://localhost:8080/listing/find?priceMax=3000', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })
  const findListingData = await findListingResponse.json()
  console.dir({ findListingData }, { depth: 7 })
  //
  //
  //

  const findListingResponse2 = await fetch('http://localhost:8080/listing/find', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      // listingId: '',
      // accountId: '',
      location: 'kyiv',
      priceMax: 9000,
      sleepingPlacesMin: 1,
      limit: 10,
      skip: 0,
    }),
  })
  const findListingData2 = await findListingResponse2.json()
  console.dir({ findListingData2 }, { depth: 7 })
  //
  //
  //
  const deleteAccountResponse = await fetch('http://localhost:8080/admin/account', {
    method: 'DELETE',
    headers: { 'content-type': 'application/json', 'authorization': isAdminToken },
    body: JSON.stringify({
      email: 'john@doe.com',
    }),
  })
  const deleteAccountData = await deleteAccountResponse.json()
  console.dir({ deleteAccountData }, { depth: 7 })

  //   assert(deleteAccountData.data.deleted === true)
})()
