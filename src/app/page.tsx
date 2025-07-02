import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Fragment } from 'react';
import { Button } from '@/components/ui/button';

type FormQuestionsType = {
	groupName: string;
	inputs: { id: string; placeholder: string; type: string; showTitle: boolean }[];
}[];

export default function Home() {
	const form: FormQuestionsType = [
		{
			groupName: 'Title',
			inputs: [
				{
					id: 'title',
					placeholder: 'Enter your preferred title',
					type: 'input',
					showTitle: true,
				},
			],
		},
		{
			groupName: 'Name',
			inputs: [
				{
					id: 'foreName',
					placeholder: 'Enter your ForeName:',
					type: 'input',
					showTitle: true,
				},
				{
					id: 'surName',
					placeholder: 'Enter your SurName:',
					type: 'input',
					showTitle: false,
				},
			],
		},
		{
			groupName: 'Address',
			inputs: [
				{ id: 'address1', placeholder: 'Street 1:', type: 'input', showTitle: true },
				{ id: 'address2', placeholder: 'Street 2:', type: 'input', showTitle: false },
				{ id: 'address3', placeholder: 'Street 3:', type: 'input', showTitle: false },
				{ id: 'address4', placeholder: 'Town/City:', type: 'input', showTitle: false },
				{ id: 'address5', placeholder: 'County:', type: 'input', showTitle: false },
				{ id: 'address6', placeholder: 'Postcode:', type: 'input', showTitle: false },
			],
		},
		{
			groupName: 'DoB',
			inputs: [{ id: 'DoB', placeholder: 'DD/MM/YY', type: 'date', showTitle: true }],
		},
	];
	const bool = false;

	const ternary = bool ? 'true' : 'false';

	console.log(ternary);
	return (
		<div className='bg-[#3f3f3f] gap-2 flex flex-col p-6 rounded-[50px] text-white w-full'>
			<h1 className='mb-4 text-2xl underline'>Section 1: Help Us Learn About You!</h1>
			{form.map((obj, idx) => {
				return (
					<div
						className='flex flex-col'
						key={idx}>
						{obj.groupName}
						<div className='grid grid-cols-2 gap-2'>
							{obj.inputs.map((inputs) => {
								const inputsLength = obj.inputs.length;
								return (
									<Fragment key={inputs.id}>
										<Input
											id={inputs.id}
											placeholder={inputs.placeholder}
											classname={inputsLength === 1 ? 'col-span-2' : ''}
										/>
									</Fragment>
								);
							})}
						</div>
					</div>
				);
			})}
			<Button classname='place-self-end'>Enter</Button>
		</div>
	);
}
