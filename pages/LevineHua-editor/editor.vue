<template>
<myeditor class="editor" 
    @cancel="hideEditor" 
    @save="saveEditor" 
    :html="html"
    :imageUploader="uploadImg" 
    :muiltImage="true">
</myeditor>
</template>

<script>
	import myeditor from "@/components/robin-editor/editor.vue"
	export default {
	    components: {myeditor}
	}
</script>
