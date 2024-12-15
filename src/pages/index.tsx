import { Heading, Tag, Text } from '../components'

export default function Home() {
	return (
		<main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
			<Heading tag='h1'>Assalomu alekum</Heading>
			<Text>somethign</Text>
			<Tag color='re'>some</Tag>
			<Tag color='gr'>some</Tag>
			<Tag color='pr'>some</Tag>
		</main>
	)
}
