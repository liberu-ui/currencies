<template>
    <div class="columns is-centered">
        <div class="column is-three-fifths-desktop is-two-thirds-tablet">
            <enso-form class="box form-box has-background-light raises-on-hover"/>
        </div>
    </div>
</template>

<script>
import { EnsoForm } from '@liberu-ui/forms/bulma';

export default {
    name: 'Create',

    components: { EnsoForm },
};
</script>
