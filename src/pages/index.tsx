import { useState } from 'react'
import { Button, Heading, Input, Tag, Text } from '../components'
import Textarea from '../components/textarea/textarea'

export default function Home() {
	const [isClicked, setIsClicked] = useState(false)

	return (
		<main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
			<Heading tag='h1'>Assalomu alekum</Heading>
			<Text>something</Text>
			<Tag color='re'>some</Tag>
			<Tag color='gr'>some</Tag>
			<Tag color='pr'>some</Tag>
			<Button appearance='primary' arrow='right'>
				Button3
			</Button>
			<Button
				appearance='ghost'
				arrow={isClicked ? 'down' : 'right'}
				onClick={() => setIsClicked(e => !e)}
			>
				Button3
			</Button>
			<br />
			<br />
			<Input placeholder='Enter your text' />
			<br />
			<br />
			<Textarea placeholder='Text' />
		</main>
	)
}
