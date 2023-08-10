<script>
	import VideoThumbnail from '$lib/assets/videoThumbnailPicture.png';
	import VideoIcon from '$lib/assets/videoIcon.svg';
	import UpvoteIcon from '$lib/assets/upvote-icon.svg';
	import DownvoteIcon from '$lib/assets/downvote-icon.svg';
</script>

<div class="p-60">
	<div class="flex flex-col gap-1">
		<img src={VideoThumbnail} alt="thumbnail" />
		<div class="flex gap-2 items-center justify-between pt-1">
			<div class="flex gap-3">
				<img src={VideoIcon} alt="icon" />
				<div class="text-secondary-content">20 January 2023</div>
			</div>
			<div class="badge badge-success">$0.03</div>
		</div>
		<div class="text-lg font-semibold">Bernie Sanders Says it's Time for a Four-Day Work Week</div>
		<div class="interactions">
			<div class="flex gap-6">
				<div class="flex gap-1">
					<img src={UpvoteIcon} alt="icon" />
					<div class="number">1.2K</div>
				</div>
				<div class="flex gap-1">
					<img src={DownvoteIcon} alt="icon" />
					<div class="number">503</div>
				</div>
				<div class="text-secondary-content">912 perspectives</div>
				<div class="text-secondary-content">12.3K views</div>
			</div>
		</div>
	</div>
</div>
