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
		<summary class="cursor-pointer">{props.title}</summary>
		<ul class="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-[400px]">
			{#each props.dropDownItems as links}
				<li>
					<a class="flex" href="/">
						<img src={links.icon} alt="icon" />
						<div class="text">
							<div class=" text-lg">{links.title}</div>
							<div class="text">{links.subDescription}</div>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</details>
{/each}
