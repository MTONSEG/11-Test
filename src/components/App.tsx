import Hero from 'components/sections/Hero/Hero'
import Layout from './containers/Layout/Layout'
import Users from 'components/sections/Users/Users'
import Button from 'components/ui/buttons/Button/Button'
import Form from 'components/sections/Form/Form'

const App = () => {
	return (
		<Layout>
			<Hero />
			<Users />
			<Form />
			lol
			<Button
				children={'text'}
				onClick={() => {
					console.log('test')
				}}
			/>
		</Layout>
	)
}

export default App
