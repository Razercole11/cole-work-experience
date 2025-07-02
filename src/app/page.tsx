'use client'
import Image from 'next/image';
import { Input, Button, Title, Dropdown} from '@/components/ui/';
import { ChangeEvent, FormEvent, Fragment } from 'react';
import {formQuestions} from '@/schema';
import { useState, useEffect } from 'react';

const initialState = {title:'mr', foreName:'', surName:'', address1:'', address2:'', address3:'', address4:'', address5:'', address6:'', DoB:'', niNumber:'', email:'', completionDate:'' }

type formDataKeysType = keyof typeof initialState

export default function Home() {
	const [formData, setFormData] = useState(initialState)

	function updateForm(key:formDataKeysType, value:string){
		setFormData((prev) => {
			return {
				...prev, 
				[key]: value,
			}
		})
	}

	async function submitForm(e:FormEvent<HTMLFormElement>){
		e.preventDefault()
		const response = await fetch('/api', {
			method: 'POST',
			body: JSON.stringify(formData)
		})
		const text = await response.text()
		console.log(text)
	}


	return (
		<>
		<Title>New Client Form</Title>
		<form className='bg-[#3f3f3f] gap-2 flex flex-col p-6 rounded-[50px] text-white w-full' onSubmit={submitForm}>
			<h1 className='mb-4 text-2xl underline'>Section 1: Help Us Learn About You!</h1>
			{formQuestions.map((obj, idx) => {
				return (
					<div
						className='flex flex-col'
						key={idx}>
						{obj.groupName}
						<div className='grid grid-cols-2 gap-2'>
							{obj.inputs.map((inputs) => {
								const inputsLength = obj.inputs.length;

								if (inputs.type==='dropdown' && inputs.options){
									return(
										<Fragment key={inputs.id}>
											<Dropdown  
											options={inputs.options}
											className={inputsLength === 1 ? 'col-span-2' : ''} 
											value={formData[inputs.id]} onChange={(e) => {
												updateForm(inputs.id, e.target.value)
											}}/>
										</Fragment>
									)
								};

								return (
									<Fragment key={inputs.id}>
										<Input inputType={inputs.type}
											value={formData[inputs.id]}
											id={inputs.id}
											placeholder={inputs.placeholder}
											classname={inputsLength === 1 ? 'col-span-2' : ''}
											onChange={(e) => {
												updateForm(inputs.id, e.target.value)
											}}
										/>
									</Fragment>
								);
							})}
						</div>
					</div>
				);
			})}
			<Button classname='place-self-end'>Enter</Button>
		</form>
		</>
	);
}
