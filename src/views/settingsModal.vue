<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-card mode="md">
      <ion-card-header>
        <ion-card-title>Layouts</ion-card-title>
      </ion-card-header>
    </ion-card>
    <ion-card>
      <ion-accordion-group>
        <ion-accordion value="mainScreen">
          <ion-item slot="header">
            <ion-label>Main Screen</ion-label>
          </ion-item>
          <ion-list slot="content">
            <ion-card>
              <ion-radio-group v-model="mainScreenLayout"
                ><ion-item>
                  <ion-icon slot="start" :icon="cardSharp"></ion-icon>
                  <ion-label>Card</ion-label>
                  <ion-radio value="Card" slot="end"> </ion-radio></ion-item
                ><ion-item>
                  <ion-icon slot="start" :icon="gridSharp"></ion-icon>
                  <ion-label>Grid</ion-label>
                  <ion-radio value="Grid" slot="end"> </ion-radio
                ></ion-item>
                <ion-item>
                  <ion-icon slot="start" :icon="listSharp"></ion-icon>
                  <ion-label>List</ion-label>
                  <ion-radio value="List" slot="end"> </ion-radio
                ></ion-item>
              </ion-radio-group>
            </ion-card>
          </ion-list>
        </ion-accordion>

        <ion-accordion value="listScreens">
          <ion-item slot="header">
            <ion-label>List Screens</ion-label>
          </ion-item>

          <ion-list slot="content">
            <ion-card
              ><ion-radio-group v-model="listScreenLayout"
                ><ion-item>
                  <ion-icon slot="start" :icon="listSharp"></ion-icon>
                  <ion-label>Basic Details List</ion-label>
                  <ion-radio value="BasicList" slot="end">
                  </ion-radio></ion-item
                ><ion-item>
                  <ion-icon slot="start" :icon="expandSharp"></ion-icon>
                  <ion-label>Expanded Details List</ion-label>
                  <ion-radio value="ExpandedList" slot="end"> </ion-radio
                ></ion-item>
              </ion-radio-group>
            </ion-card>
          </ion-list>
        </ion-accordion> </ion-accordion-group></ion-card
    ><ion-card>
      <ion-toolbar>
        <ion-segment>
          <ion-segment-button @click="dismiss()">
            <ion-icon :icon="closeSharp"></ion-icon>
            <ion-label>Cancel</ion-label></ion-segment-button
          >
          <ion-segment-button @click="setLayout()">
            <ion-icon :icon="saveSharp"></ion-icon>
            <ion-label>Save</ion-label></ion-segment-button
          ></ion-segment
        >
      </ion-toolbar></ion-card
    >
  </ion-content>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  IonAccordionGroup,
  IonAccordion,
  IonCard,
  IonItem,
  IonList,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  modalController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import {
  closeSharp,
  saveSharp,
  cardSharp,
  gridSharp,
  listSharp,
  expandSharp,
} from "ionicons/icons";
import { store } from "@/theme/theme";
export default defineComponent({
  data() {
    return {
      mainScreenLayout: localStorage.getItem("mainScreenLayout"),
      listScreenLayout: localStorage.getItem("listScreenLayout"),
    };
  },
  name: "settingsModal",
  props: {
    title: { type: String, default: "Theme Settings" },
  },
  components: {
    IonContent,
    IonHeader,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonToolbar,
    IonAccordionGroup,
    IonAccordion,
    IonCard,
    IonItem,
    IonList,
    IonLabel,
    IonRadio,
    IonRadioGroup,
  },
  methods: {
    setLayout() {
      // @ts-ignore: Object is possibly 'null'.
      localStorage.setItem("mainScreenLayout", this.mainScreenLayout);
      // @ts-ignore: Object is possibly 'null'.
      localStorage.setItem("listScreenLayout", this.listScreenLayout);
      store.setLayouts();
      this.dismiss();
    },
    dismiss() {
      modalController.dismiss();
      this.$forceUpdate();
    },
  },
  setup() {
    return {
      closeSharp,
      saveSharp,
      cardSharp,
      gridSharp,
      listSharp,
      expandSharp,
    };
  },
});
</script>
