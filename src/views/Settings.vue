<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Settings Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card mode="md">
        <ion-card-header>
          <ion-card-title>Layouts</ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-card>
        <ion-accordion-group
        >
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
            <ion-segment-button @click="$router.push({ path: '/' })">
              <ion-icon :icon="closeSharp"></ion-icon>
              <ion-label>Cancel</ion-label></ion-segment-button
            >
            <ion-segment-button @click="setLayout()">
              <ion-icon :icon="saveSharp"></ion-icon>
              <ion-label>Save</ion-label></ion-segment-button
            ></ion-segment
          >
        </ion-toolbar>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";
import { store } from "@/theme/theme";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
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
} from "@ionic/vue";
import {
  closeSharp,
  saveSharp,
  cardSharp,
  gridSharp,
  listSharp,
  expandSharp,
} from "ionicons/icons";
export default defineComponent({
  data() {
    return {
      mainScreenLayout: localStorage.getItem("mainScreenLayout"),
      listScreenLayout: localStorage.getItem("listScreenLayout"),
    };
  },
  name: "FolderPage",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
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
      router.replace({ path: "/" });
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

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
