<template>
  <Hero
    title="Unlock Your Dream Getaways: Discover Our Selection of Free Timeshares!"
    subtitle="Tired of high timeshare maintenance fees? Explore our inventory of timeshare opportunities available for transfer – potentially saving you thousands!"
    buttonText="Explore Now"
    buttonHref="Resort"
    :imageUrl="hero"
  />
  <BContainer class="section-padding">
    <ImageWithText
      imageUrl="https://placehold.co/800x400"
      title="Our Featured Product"
      text="This is a brief description of our featured product. It's awesome!"
      imageClass="col-md-6"
      textClass="col-md-6"
    />

    <BRow mt-5 gap-4>
      <BCol md="4" mb-md-4 v-for="resort in resorts" :key="resort.id">
        <Card
          :title="resort.name"
          :text="resort.description"
          imgSrc="https://placehold.co/300x200"
          imgAlt="Card Image"
          cardMargin="mb-4"
          buttonText="Read More"
          :buttonHref="{
            name: 'ResortDetails',
            params: { resort_id: resort.id },
          }"
        />
      </BCol>
    </BRow>

    <FeatureList
      title="Hot It Works"
      text="Get your free timeshare today!"
      :features="[
        {
          title: 'Find One',
          description:
            'Find a resort, week, or package. That you would like to enjoy.',
          icon: 'bi-1-square',
        },
        {
          title: 'Provide Info',
          description:
            'Provide the neccessary info so that we know what timeshare you would like and can get started with the transfer.',
          icon: 'bi-2-square',
        },
        {
          title: 'Transfer Process',
          description:
            'Usually the longest part of the process. This is where deeds are exacuted and transfer documents are signed and processed.',
          icon: 'bi-3-square',
        },
      ]"
    />
    <Gallery
      :images="['https://placehold.co/300x400', 'https://placehold.co/300x400']"
    />

    <Testimonial
      quote="This is a sample testimonial quote."
      author="John Doe"
      image="https://placehold.co/100x100"
    />
  </BContainer>
</template>
<script setup>
import { hero } from "../js/main.js";
import { resorts } from "../js/resorts.js";
const resortsList = resorts;
const heroImage = hero;
console.log(heroImage);
console.log(resortsList);
</script>
