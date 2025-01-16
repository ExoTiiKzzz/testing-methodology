/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { HttpContext } from '@adonisjs/core/http'

const HelloWorldsController = () => import('#controllers/hello_worlds_controller')

router.get('/', [HelloWorldsController, 'index'])

router.get('/coverage', async ({ response }: HttpContext) => {
  //return /test/coverage/index.html
  response.download('test/coverage/index.html')
})
