<template>
  <section>
    <div v-if="route.params.resort_id && currentResort.name">
      <h2>Resort Details</h2>
      <ResortDetails :resort="currentResort" />
    </div>
  </section>
  <section>
  <div v-if="!route.params.resort_id">
    <h2>All Resorts</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="resort in resorts" :key="resort.id">
          <td><RouterLink :to="{ name: 'ResortDetails', params: { resort_id: resort.id } }">{{ resort.name }}</RouterLink></td>
          <td>{{ resort.location }}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import ResortDetails from '../components/ResortDetails.vue';
import { resorts } from '../js/resorts';

const route = useRoute();

const currentResort = computed(() => {    
  if (route.params.resort_id) {
     const resort = resorts.find(resort => resort.id === parseInt(route.params.resort_id));
     return resort || {};
  }
  return {};
});
</script>
