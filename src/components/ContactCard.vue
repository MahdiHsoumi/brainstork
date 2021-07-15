<template>
  <b-card class="card-container">
    <div class="card-header" @click="showModal">
      <h2 class="name">
        <span>{{ firstname }}</span> <span>{{ lastname }}</span>
      </h2>
    </div>
    <div class="card-body">
      <span class="age"
        >Age: <strong>{{ age }}</strong></span
      >
      <span class="email"
        >Email: <strong>{{ email }}</strong></span
      >
      <span class="companyname"
        >Company name: <strong>{{ companyname }}</strong></span
      >
    </div>
    <div class="delete-button">
      <b-icon-trash
        style="cursor:pointer;color:black"
        font-scale="2"
        @mouseover="deleteHover = true"
        v-if="!deleteHover"
      ></b-icon-trash>
      <b-icon-trash-fill
        @mouseleave="deleteHover = false"
        style="cursor:pointer;"
        variant="danger"
        font-scale="2"
        @click="confirm()"
        v-else
      ></b-icon-trash-fill>
    </div>
    <b-modal ref="edit-modal" title="Edit Contact" modal-ok="Edit">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="First Name"
          label-for="firstname-input"
          invalid-feedback="First Name is required"
          :state="nameState"
        >
          <b-form-input
            id="firstname-input"
            v-model="firstname"
            :state="lastnameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Last Name"
          label-for="lastname-input"
          invalid-feedback="Last Name is required"
          :state="lastnameState"
        >
          <b-form-input
            id="lastname-input"
            v-model="lastname"
            :state="lastnameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Age"
          label-for="age-input"
          invalid-feedback="Age is required"
          :state="ageState"
        >
          <b-form-input
            id="age-input"
            v-model="age"
            :state="ageState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Email"
          label-for="email-input"
          invalid-feedback="Email is required"
          :state="emailState"
        >
          <b-form-input
            id="email-input"
            v-model="email"
            :state="emailState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Company Name"
          label-for="companyname-input"
          invalid-feedback="Company Name is required"
          :state="companynameState"
        >
          <b-form-input
            id="companyname-input"
            v-model="companyname"
            :state="companynameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </b-card>
</template>
<script>
export default {
  name: "contact card",
  props: {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    companyname: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      deleteHover: false,
      firstnameState: null,
      lastnameState: null,
      ageState: null,
      emailState: null,
      companynameState: null,
      confirmDelete: "",
    };
  },
  methods: {
    showModal() {
      this.$refs["edit-modal"].show();
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.firstnameState = valid;
      return valid;
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("edit-modal");
      });
    },
    confirm() {
      this.confirmDelete = "";
      this.$bvModal
        .msgBoxConfirm("Please confirm that you want to delete this contact.", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          this.confirmDelete = value;
        })

    },
  },
};
</script>
<style scoped>
.card-container {
  background-color: #004349;
  color: white;
  margin-bottom: 30px;
}
.card-body {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.delete-button {
  display: flex;
  justify-content: flex-end;
}
</style>
