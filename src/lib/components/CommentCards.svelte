<script>
	import Avatar1 from '$lib/assets/avatar1.jpg';
	import Avatar2 from '$lib/assets/avatar2.jpg';
	import Avatar3 from '$lib/assets/avatar3.jpg';
	import UpvoteIcon from '$lib/assets/upvote-icon.svg';
	import DownvoteIcon from '$lib/assets/downvote-icon.svg';
	import Avatar from './Avatar.svelte';
</script>

<div class="flex flex-col gap-3 p-2 shadow-lg bg-base-100 rounded-sm xl:w-[70%] self-center">
	<div class="flex items-center gap-5">
		<div class="flex gap-1 items-center">
			<Avatar props={Avatar2} />
			<div class="text-sm font-semibold">John Smith</div>
		</div>
		<div class="text-sm">1 day ago</div>
		<div class="flex items-center gap-1 text-sm">
			<div class="h-3 w-3 bg-red-600 rounded-3xl" />
			Disagreeing
		</div>
	</div>
	<div class="text-sm">
		The problem is you did not address the fact that they don’t care about the other side... you are
		<div class="tooltip tooltip-open tooltip-bottom" data-tip="User censoring">
			<strong class="blur-md rounded-xl cursor-pointer"> fucking retarded </strong>
		</div>
	</div>
	<div class="flex gap-3 items-center">
		<div class="flex">
			<img src={UpvoteIcon} alt="icon" />
			<div class="text-sm">1.2K</div>
		</div>
		<div class="flex">
			<img src={DownvoteIcon} alt="icon" />
			<div class="text-sm">503</div>
		</div>
		<div class="font-semibold text-sm">Reply</div>
	</div>
</div>
<div class="flex flex-col gap-3 p-2 shadow-lg bg-base-100 rounded-sm xl:w-[70%] self-center">
	<div class="flex items-center gap-5">
		<div class="flex gap-1 items-center">
			<Avatar props={Avatar1} />
			<div class="text-sm font-semibold">MonkMode</div>
		</div>
		<div class="text-sm">3 days ago</div>
		<div class="flex items-center gap-1 text-sm">
			<div class="h-3 w-3 bg-green-600 rounded-3xl" />
			Agreeing
		</div>
	</div>
	<div class="text-sm">
		Great job! You referenced the perfect sources for this argument. In further support of your
		argument, in US v IRA we saw the complete lack of data security on social media platforms and
		the ability to easily manipulate a group of people with a couple hundred bots and some easy
		idiots.
	</div>
	<div class="flex flex-col gap-1 text-sm">
		<strong> Why this argument wins:</strong>
		<ol class="list-decimal px-4">
			<li>Sources are established entities that have solid frameworks for justice</li>
			<li>
				To many people with mixed interests would have to collude to make the opposite argument true
			</li>
			<li>
				Lastly the behavior of the person in question aligns with the people he is being accused of
				colluding with.
			</li>
		</ol>
	</div>
	<div class="flex gap-3 items-center">
		<div class="flex">
			<img src={UpvoteIcon} alt="icon" />
			<div class="text-sm">1.2K</div>
		</div>
		<div class="flex">
			<img src={DownvoteIcon} alt="icon" />
			<div class="text-sm">503</div>
		</div>
		<div class="font-semibold text-sm">Reply</div>
	</div>
</div>
<div class="flex flex-col gap-3 p-2 shadow-lg bg-base-100 rounded-sm xl:w-[70%] self-center">
	<div class="flex items-center gap-5">
		<div class="flex gap-1 items-center">
			<Avatar props={Avatar3} />
			<div class="text-sm font-semibold">awesome dude!</div>
		</div>
		<div class="text-sm">4 days ago</div>
		<div class="flex items-center gap-1 text-sm">
			<div class="h-3 w-3 bg-yellow-500 rounded-3xl" />
			Neutral
		</div>
	</div>
	<div class="text-sm">
		The problem is you did not address the fact that they don’t care about the other side... you are
		<div class="tooltip tooltip-open tooltip-bottom" data-tip="User censoring">
			<strong class="blur-md rounded-xl cursor-pointer"> fucking retarded </strong>
		</div>
	</div>
	<div class="flex gap-3 items-center">
		<div class="flex">
			<img src={UpvoteIcon} alt="icon" />
			<div class="text-sm">1.2K</div>
		</div>
		<div class="flex">
			<img src={DownvoteIcon} alt="icon" />
			<div class="text-sm">503</div>
		</div>
		<div class="font-semibold text-sm">Reply</div>
	</div>
</div>
