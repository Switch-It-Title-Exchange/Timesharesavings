<template>
  <div v-if="resort.name">
    <div class="resort-details">
      <h2 class="resort-name">{{ resort.name }}</h2>
      <div class="resort-info">
        <p class="resort-location"><strong>Location:</strong> {{ resort.location }}</p>
        <p class="resort-description"><strong>Description:</strong> {{ resort.description }}</p>
        <p class="resort-price"><strong>Price per Night:</strong> ${{ resort.pricePerNight }}</p>
        <p class="resort-rating"><strong>Rating:</strong> {{ resort.rating }} stars</p>
        <div v-if="resort.amenities && resort.amenities.length > 0">
          <h3>Amenities:</h3>
          <ul class="resort-amenities">
            <li v-for="amenity in resort.amenities" :key="amenity">{{ amenity }}</li>
          </ul>
        </div>
        <div v-if="resort.images && resort.images.length > 0">
          <h3>Images:</h3>
            <img v-for="(image, index) in resort.images" :key="index" :src="image" alt="Resort Image" class="resort-image" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResortDetails',
  props: {
    resort: {
      type: Object,      
      required: true,
    },
  },
};
</script>

<style scoped>
.resort-details {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.resort-name {
  color: #333;
  margin-bottom: 10px;
}

.resort-info {
  line-height: 1.6;
}

.resort-location,
.resort-description,
.resort-price,
.resort-rating {
  margin-bottom: 5px;
}

.resort-amenities {
  list-style: disc;
  margin-left: 20px;
}

.resort-image{
  max-width: 300px;
  max-height: 300px;
  margin: 10px;
}
</style>