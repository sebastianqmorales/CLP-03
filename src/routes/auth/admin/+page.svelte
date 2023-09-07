<div class="text-4xl">hello admin</div>
<form action="./?/logout" method="POST">
	<button type="submit" class="btn btn-primary">Logout</button>
</form>

<!-- 
	form
		inputs, title
		inputs, excerpt
		tiptap editor needs to be equal to body.content
 -->
<form action="?/submitBlog" method="POST" class="form-control gap-4 px-20">
	<input class="input input-bordered w-[300px]" placeholder="Title" type="text" name="title" />
	<input class="input input-bordered w-[300px]" placeholder="Excerpt" type="text" name="excerpt" />
	<input class="input input-bordered w-[300px]" placeholder="Content" type="text" name="content" />
	<button type="submit" class="btn btn-primary rounded-none w-[300px]">Submit blog post</button>
</form>
