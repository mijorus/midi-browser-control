<script>
    import { onMount } from "svelte";
    import * as service from "../lib/midiService";

    onMount(async () => {
        await service.startService();
    });
</script>

<div class="container mx-auto text-5xl">
    <h1>Midi controller page</h1>
    <p>Keep this open</p>
</div>
