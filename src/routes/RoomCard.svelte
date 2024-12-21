<script>
    // Icons
    import AlarmIcon from "phosphor-svelte/lib/Alarm";
    import UserIcon from "phosphor-svelte/lib/User";
    import LinkSimpleIcon from "phosphor-svelte/lib/LinkSimple";
</script>

<div
    class="p-6 bg-card hover:bg-neutral-700 hover:cursor-pointer transition-colors rounded-lg justify-between items-start flex overflow-hidden gap-9"
>
    <div class="flex-col justify-start items-start gap-6 flex">
        <p class="text-2xl font-bold">guest38437</p>
        <div class="justify-start items-center gap-8 flex flex-row">
            <div class="justify-start items-center gap-3 flex">
                <AlarmIcon size={20} />
                <span class="text-left text-base font-medium">00:01:12</span>
            </div>
            <div class="justify-start items-center gap-3 flex">
                <UserIcon size={20} />
                <span class="text-left text-base font-medium">1</span>
            </div>
        </div>
    </div>
    <div
        class="px-4 py-3 bg-background rounded-lg justify-center items-center gap-3 flex"
    >
        <LinkSimpleIcon size={18} />
        <span class="text-left text-lg font-normal">3000</span>
    </div>
</div>
