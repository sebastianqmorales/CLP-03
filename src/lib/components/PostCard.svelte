<script>
	import VideoThumbnail from '$lib/assets/videoThumbnailPicture.png';
	import MusicThumbnail from '$lib/assets/musicThumbnail.png';
	import VideoIcon from '$lib/assets/videoIcon.svg';
	import UpvoteIcon from '$lib/assets/upvote-icon.svg';
	import DownvoteIcon from '$lib/assets/downvote-icon.svg';
	import TextIcon from '$lib/assets/text-post-icon.svg';
	import MusicIcon from '$lib/assets/music-icon.svg';

	/**
	 * @type {string}
	 */
	export let props;
</script>

<div data-theme="light" class="w-[340px] p-2 shadow-md">
	{#if props == 'video'}
		<div class="flex flex-col gap-1">
			<img src={VideoThumbnail} alt="thumbnail" />
			<div class="flex gap-2 items-center justify-between pt-1">
				<div class="flex md:gap-3 gap-1">
					<img src={VideoIcon} alt="icon" />
					<div class="text-secondary-content text-sm">20 January 2023</div>
				</div>
				<div class="badge badge-sm badge-success text-sm">$0.06</div>
			</div>
			<div class="text-base font-semibold">
				Bernie Sanders Says it's Time for a Four-Day Work Week
			</div>
			<div class="flex md:gap-2 justify-between md:justify-normal">
				<div class="flex">
					<img src={UpvoteIcon} alt="icon" />
					<div class="text-sm">1.2K</div>
				</div>
				<div class="flex">
					<img src={DownvoteIcon} alt="icon" />
					<div class="text-sm">503</div>
				</div>
				<div class="text-secondary-content text-sm">912 perspectives</div>
				<div class="text-secondary-content text-sm">12.3K views</div>
			</div>
		</div>
	{:else if props == 'text'}
		<div class="flex flex-col gap-1">
			<div class="flex gap-2 items-center justify-between pt-1">
				<div class="flex md:gap-3 gap-1">
					<img src={TextIcon} alt="icon" />
					<div class="text-secondary-content text-sm">20 January 2023</div>
				</div>
				<div class="badge badge-sm badge-success text-sm">$0.01</div>
			</div>
			<div class="text-base font-semibold">Saying Goodbye to Stack Overflow</div>
			<div class="text-[#475467]">
				I've had a registered account on Stack Overflow for six years. I have about ten years total
				experience in IT. I have followed a few tags on SO to answer questions in some very narrow
				areas I have particular knowledge which might be helpful to others.
			</div>
			<div class="flex md:gap-2 justify-between md:justify-normal">
				<div class="flex">
					<img src={UpvoteIcon} alt="icon" />
					<div class="text-sm">1.2K</div>
				</div>
				<div class="flex">
					<img src={DownvoteIcon} alt="icon" />
					<div class="text-sm">503</div>
				</div>
				<div class="text-secondary-content text-sm">912 perspectives</div>
				<div class="text-secondary-content text-sm">12.3K views</div>
			</div>
		</div>
	{:else if props == 'music'}
		<div class="flex gap-3">
			<img src={MusicThumbnail} alt="thumbnail" />
			<div class="flex flex-col justify-evenly">
				<div class="flex gap-2 items-center justify-between pt-1">
					<div class="flex md:gap-3 gap-1">
						<img src={MusicIcon} alt="icon" />
						<div class="text-secondary-content md:text-base text-sm">20 January 2023</div>
					</div>
					<div class="badge badge-sm badge-success md:text-base text-sm">$0.05</div>
				</div>
				<div class="md:text-lg font-semibold">Champions edit</div>
				<div class="flex md:gap-6 justify-between md:justify-normal">
					<div class="flex gap-1">
						<img src={UpvoteIcon} alt="icon" />
						<div class="md:text-base text-sm">1.2K</div>
					</div>
					<div class="flex gap-1">
						<img src={DownvoteIcon} alt="icon" />
						<div class="md:text-base text-sm">503</div>
					</div>
					<div class="text-secondary-content md:text-base text-sm">123.4K plays</div>
				</div>
			</div>
		</div>
	{/if}
</div>
