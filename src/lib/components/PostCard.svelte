<script>
	import VideoThumbnail from '$lib/assets/videoThumbnailPicture.png';
	import MusicThumbnail from '$lib/assets/musicThumbnail.png';
	import VideoIcon from '$lib/assets/videoIcon.svg';
	import UpvoteIcon from '$lib/assets/upvote-icon.svg';
	import DownvoteIcon from '$lib/assets/downvote-icon.svg';
	import TextIcon from '$lib/assets/text-post-icon.svg';
	import MusicIcon from '$lib/assets/music-icon.svg';
	import UpVote from './UpVote.svelte';

	/**
	 * @type {string}
	 */
	export let props;
</script>

<div data-theme="light" class="w-[340px] 2xl:w-[500px] p-2 shadow-md">
	{#if props == 'video'}
		<div class="flex flex-col gap-1">
			<img src={VideoThumbnail} alt="thumbnail" />
			<div class="flex gap-2 items-center justify-between pt-1">
				<div class="flex md:gap-3 gap-1 items-center">
					<div class="tooltip tooltip-bottom cursor-pointer" data-tip="This is video content">
						<img src={VideoIcon} alt="icon" />
					</div>
					<div class="text-secondary-content text-sm 2xl:text-lg">20 January 2023</div>
				</div>
				<div class="tooltip tooltip-bottom cursor-pointer 2xl:text-lg" data-tip="This post costs 3 cents to access.">
					<div class="badge badge-sm 2xl:badge-md badge-success  text-sm 2xl:text-lg">$0.03</div>
				</div>
			</div>
			<div class="2xl:text-xl font-semibold">
				Bernie Sanders Says it's Time for a Four-Day Work Week
			</div>
			<div class="flex md:gap-2 justify-between">
				<div class="flex gap-3">
					<div class="flex gap-1">
						<img src={UpvoteIcon} alt="icon" />
						<div class="text-sm 2xl:text-lg">1.2K</div>
					</div>
					<div class="flex gap-1">
						<img src={DownvoteIcon} alt="icon" />
						<div class="text-sm 2xl:text-lg">503</div>
					</div>

				</div>
				<div class="text-secondary-content text-sm 2xl:text-lg">912 perspectives</div>
				<div class="text-secondary-content text-sm 2xl:text-lg">12.3K views</div>
			</div>
		</div>
	{:else if props == 'text'}
		<div class="flex flex-col gap-1">
			<div class="flex  items-center justify-between pt-1">
				<div class="flex md:gap-3 gap-1 items-center">
					<div class="tooltip tooltip-bottom cursor-pointer" data-tip="This is written content">
						<img src={TextIcon} alt="icon" />
					</div>
					<div class="text-secondary-content text-sm 2xl:text-lg">20 January 2023</div>
				</div>
				<div class="tooltip tooltip-bottom cursor-pointer 2xl:text-lg" data-tip="This post costs 1 cent to access.">
					<div class="badge badge-sm 2xl:badge-md badge-success  text-sm 2xl:text-lg">$0.01</div>
				</div>
			</div>
			<div class="2xl:text-xl font-semibold">Saying Goodbye to Stack Overflow</div>
			<div class="text-[#475467]">
				I've had a registered account on Stack Overflow for six years. I have about ten years total
				experience in IT. I have followed a few tags on SO to answer questions in some very narrow
				areas I have particular knowledge which might be helpful to others.
			</div>
			<div class="flex md:gap-2 justify-between">
				<div class="flex gap-3">
					<div class="flex gap-1">
						<img src={UpvoteIcon} alt="icon" />
						<div class="text-sm 2xl:text-lg">1.2K</div>
					</div>
					<div class="flex gap-1">
						<img src={DownvoteIcon} alt="icon" />
						<div class="text-sm 2xl:text-lg">503</div>
					</div>
					
				</div>
				<div class="text-secondary-content text-sm 2xl:text-lg">912 perspectives</div>
				<div class="text-secondary-content text-sm 2xl:text-lg">12.3K views</div>
			</div>
		</div>
	{:else if props == 'music'}
		<div class="grid grid-cols-3 2xl:grid-cols-8 items-center">
			<img class="2xl:col-span-2" src={MusicThumbnail} alt="thumbnail" />
			<div class="flex flex-col gap-3 col-span-2 2xl:col-span-6">
				<div class="flex flex-row items-center justify-between pt-1">
					<div class="flex md:gap-3 gap-1 items-center">
						<div class="tooltip tooltip-bottom cursor-pointer" data-tip="This is music content">
							<img src={MusicIcon} alt="icon" />
						</div>
						<div class="text-secondary-content text-sm 2xl:text-lg">20 January 2023</div>
					</div>
					<div class="tooltip tooltip-bottom cursor-pointer" data-tip="This post costs 5 cents to access.">
						<div class="badge badge-sm 2xl:badge-md badge-success  text-sm 2xl:text-lg">$0.05</div>
					</div>
				</div>
				<div class="md:text-base 2xl:text-xl font-semibold">Champions edit</div>
				<div class="flex  justify-between">
					<div class="flex gap-3">
						<div class="tooltip tooltip-bottom tooltip-success cursor-pointer" data-tip="$0.005">
							<div class="flex gap-1">
								<UpVote/>
								<div class="text-sm 2xl:text-lg">1.2K</div>
							</div>
						</div>
						<div class="flex gap-1">
							<img src={DownvoteIcon} alt="icon" />
							<div class="text-sm 2xl:text-lg">503</div>
						</div>
					</div>
					<div class="text-secondary-content text-sm 2xl:text-lg">123.4K plays</div>
				</div>
			</div>
		</div>
	{/if}
</div>
