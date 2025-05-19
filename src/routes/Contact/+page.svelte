<div class="flex w-full bg-[#EDCFFF]">
	<div class=" bg-[#9013d9] m-auto p-10 rounded-xl">
		<form class="w-full max-w-lg">
			<div class="-mx-3 mb-6 flex flex-wrap">
				<div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
					<label
						class="mb-2 block text-xs font-bold tracking-wide text-black-700 uppercase"
						for="grid-first-name"
					>
						First Name
					</label>
					<input
						class="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
						id="grid-first-name"
						type="text"
						placeholder="John"
					/>
				</div>
				<div class="w-full px-3 md:w-1/2">
					<label
						class="mb-2 block text-xs font-bold tracking-wide text-black-700 uppercase"
						for="grid-last-name"
					>
						Last Name
					</label>
					<input
						class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
						id="grid-last-name"
						type="text"
						placeholder="Doe"
					/>
				</div>
			</div>
			<div class="-mx-3 mb-6 flex flex-wrap">
				<div class="w-full px-3">
					<label
						class="mb-2 block text-xs font-bold tracking-wide text-black-700 uppercase"
						for="grid-password"
					>
						Email
					</label>
					<input
						class="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
						id="grid-email"
						type="email"
						placeholder="johndoe132@gmail.com"
					/>
				</div>
			</div>
			<div class="-mx-3 mb-2 flex flex-wrap">
				<div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
					<label
						class="mb-2 block text-xs font-bold tracking-wide text-black-700 uppercase"
						for="grid-city"
					>
						City
					</label>
					<input
						class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
						id="grid-city"
						type="text"
						placeholder="Montgomery"
					/>
				</div>
				<div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
					<label
						class="mb-2 block text-xs font-bold tracking-wide text-black-700 uppercase"
						for="grid-state"
					>
						State
					</label>
					<div class="relative">
						<select
							class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
							id="grid-state"
						>
							<option>Alabama</option>
							<option>Alaska</option>
							<option>Arizona</option>
                            <option>Arkansas</option>
                            <option>California</option>
                            <option>Colorado</option>
                            <option>Connecticut</option>
                            <option>Delaware</option>
                            <option>Florida</option>
                            <option>Georgia</option>
                            <option>Hawaii</option>
                            <option>Idaho</option>
                            <option>Illinois</option>
                            <option>Indiana</option>
                            <option>Iowa</option>
                            <option>Kansas</option>
                            <option>Kentucky</option>
                            <option>Louisiana</option>
						</select>
						<div
							class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
						>
							<svg
								class="h-4 w-4 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								><path
									d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
								/></svg
							>
						</div>
					</div>
				</div>
				<div class="mb-6 w-full px-3 md:mb-0 md:w-1/3">
					<label
						class="mb-2 block text-xs font-bold tracking-wide text-black-700 uppercase"
						for="grid-zip"
					>
						Zip
					</label>
					<input
						class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
						id="grid-zip"
						type="text"
						placeholder="90210"
					/>
				</div>
			</div>
		</form>
	</div>
</div>
