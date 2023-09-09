<script>
	// @ts-nocheck

	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import extractFormDataUtil from '$lib/util/extractFormDataUtil';
	import StarterKit from '@tiptap/starter-kit';
	import Placeholder from '@tiptap/extension-placeholder';
	import blockquoteIcon from '$lib/assets/blockquote-icon.svg';
	import boldIcon from '$lib/assets/bold-icon.svg';
	import heading1Icon from '$lib/assets/heading1-icon.svg';
	import heading2Icon from '$lib/assets/heading2-icon.svg';
	import italicsIcon from '$lib/assets/italics-icon.svg';
	import orderedListIcon from '$lib/assets/olist-icon.svg';
	import unorderdListIcon from '$lib/assets/ulist-icon.svg';
	import Blockquote from '@tiptap/extension-blockquote';
	import { stringify } from 'postcss';

	let element;
	let editor;
	let form;

	onMount(() => {
		editor = new Editor({
			element: element,
			editorProps: {
				attributes: {
					class: 'py-3 outline-none min-h-[100px]'
				}
			},
			extensions: [
				Blockquote,
				StarterKit.configure({
					orderedList: {
						HTMLAttributes: {
							class: 'list-decimal ml-5'
						}
					},
					bulletList: {
						HTMLAttributes: {
							class: 'list-disc ml-5'
						}
					}
				}),
				Placeholder.configure({
					placeholder: 'Write your post'
				})
			],
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div class="flex justify-between px-4 mb-20">
	<div class="text-xl">Hello admin</div>
	<form action="./?/logout" method="POST">
		<button type="submit" class="btn btn-primary normal-case btn-xs">Logout</button>
	</form>
</div>

<!-- 
	form
		inputs, title
		inputs, excerpt
		tiptap editor needs to be equal to body.content
	-->
<form
	bind:this={form}
	class="form-control gap-6 px-20 my-10"
	on:submit|preventDefault={async (e) => {
		const formData = extractFormDataUtil(e);
		const editorData = String(editor.getHTML());

		const BLOG = {
			form: formData,
			editor: editorData
		};

		const response = await fetch('../api/postBlog', {
			method: 'POST',
			body: JSON.stringify(BLOG),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const { statusText } = await response.json();

		editor.commands.clearContent();
		form.reset();
		return console.log(statusText);
	}}
>
	<div class="flex flex-col gap-1">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="text-2xl">Create a Blog post</label>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="text-secondary-content text-sm"
			>This post will show up on the Blog page. Title will be the title of the blog, url slug and
			head title. Excerpt will be the head description.</label
		>
	</div>
	<input
		class="bg-base-100 border-y border-y-base-300 w-full py-4 text-xl placeholder:text-2xl outline-none"
		placeholder="Title"
		type="text"
		name="title"
	/>
	<input
		class="bg-base-100 border-b border-b-base-300 w-full pb-3 text-xl placeholder:text-xl outline-none"
		placeholder="Excerpt"
		type="text"
		name="excerpt"
	/>
	<div class="flex flex-col border-b border-b-base-300 pb-4 gap-2">
		{#if editor}
			<div class="join">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
					class={editor.isActive('heading', { level: 1 })
						? 'join-item cursor-pointer p-1  bg-base-300'
						: 'cursor-pointer p-1 '}
				>
					<img src={heading1Icon} alt="H1" />
				</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
					class={editor.isActive('heading', { level: 2 })
						? 'join-item cursor-pointer p-1   bg-base-300'
						: 'join-item cursor-pointer p-1  '}
				>
					<img src={heading2Icon} alt="H2" />
				</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					on:click={() => editor.chain().focus().toggleBold().run()}
					class={editor.isActive('bold')
						? 'join-item  cursor-pointer p-1  bg-base-300'
						: '  join-item cursor-pointer p-1'}
				>
					<img src={boldIcon} alt="B" />
				</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					on:click={() => editor.chain().focus().toggleItalic().run()}
					class={editor.isActive('italic')
						? 'join-item  cursor-pointer p-1  bg-base-300'
						: ' join-item cursor-pointer p-1 '}
				>
					<img src={italicsIcon} alt="I" />
				</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					on:click={() => editor.chain().focus().toggleBulletList().run()}
					class={editor.isActive('bulletList')
						? 'join-item  cursor-pointer p-1  bg-base-300'
						: ' join-item cursor-pointer p-1 '}
				>
					<img src={unorderdListIcon} alt="bullet list" />
				</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					on:click={() => editor.chain().focus().toggleOrderedList().run()}
					class={editor.isActive('orderedList')
						? 'join-item  cursor-pointer p-1  bg-base-300'
						: ' join-item cursor-pointer p-1 '}
				>
					<img src={orderedListIcon} alt="num list" />
				</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					on:click={() => editor.chain().focus().toggleBlockquote().run()}
					class={editor.isActive('blockquote')
						? 'join-item  cursor-pointer p-1  bg-base-300'
						: ' join-item cursor-pointer p-1 '}
				>
					<img src={blockquoteIcon} alt="num list" />
				</div>
			</div>
		{/if}
		<div class="element-wrapper adaptive" bind:this={element} />
	</div>
	<div class="flex justify-between md:px-20">
		<button
			on:click={() => {
				editor.commands.clearContent();
			}}
			type="reset"
			class="btn btn-neutral rounded-none normal-case">Cancel</button
		>
		<button type="submit" class="btn btn-primary rounded-none normal-case">Submit blog post</button>
	</div>
</form>

<style>
	/* styling required by TipTap editor for placeholder */
	.element-wrapper.adaptive :global(.ProseMirror p.is-editor-empty:first-child::before) {
		color: grey;
		content: attr(data-placeholder);
		float: left;
		height: 0;
		pointer-events: none;
	}
</style>
