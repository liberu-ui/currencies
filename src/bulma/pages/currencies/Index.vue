<template>
    <enso-table class="box is-paddingless raises-on-hover"
        id="currencies">
        <template v-slot:symbol="{column, row}">
            <span class="tag is-table-tag is-warning">
                {{ row.symbol }}
            </span>
        </template>
    </enso-table>
</template>

<script>
import { EnsoTable } from '@enso-ui/tables/bulma';

export default {
    name: 'Index',

    components: { EnsoTable },
};
</script>
