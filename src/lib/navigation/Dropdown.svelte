<script>
	// @ts-nocheck

	// let props = [
	// 	{
	// 		title: '',
	// 		dropDownItems: [
	// 			{
	// 				icon: '',
	// 				title: '',
	// 				subDescription: ''
	// 			}
	// 		]
	// 	},
	// 	{
	// 		title: '',
	// 		dropDownItems: [
	// 			{
	// 				icon: '',
	// 				title: '',
	// 				subDescription: ''
	// 			},
	// 			{
	// 				icon: '',
	// 				title: '',
	// 				subDescription: ''
	// 			}
	// 		]
	// 	}
	// ];

	export let props;
</script>

{#each props as props}
	<details class="dropdown">
		<summary class="cursor-pointer font-semibold text-lg md:font-normal md:text-base"
			>{props.title}</summary
		>
		<ul class="p-6 gap-2 shadow menu md:dropdown-content z-[1] bg-base-200 rounded-box w-[440px]">
			{#each props.dropDownItems as links}
				<li>
					<a class="flex gap-4 items-start" href={links.link}>
						<img src={links.icon} alt="icon" />
						<div class="flex flex-col w-full gap-1">
							<div class="text-[16px] font-semibold">{links.title}</div>
							<div class="whitespace-nowrap">{links.subDescription}</div>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</details>
{/each}
