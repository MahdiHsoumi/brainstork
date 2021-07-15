<template>
  <div>
    <b-container class="home">
      <b-row gutter="30px">
        <b-col cols="12">
          <div style="display: flex;margin-bottom:30px">
            <b-input-group>
              <b-form-input
                type="search"
                placeholder="Enter a name ..."
              ></b-form-input>
            </b-input-group>
            <b-form-select v-model="sort" :options="sorts"></b-form-select>
          </div>
        </b-col>
        <b-col
          sm="12"
          md="6"
          lg="6"
          xl="4"
          v-for="(contact, i) in contacts"
          :key="i"
          ><ContactCard
            :firstname="contact.firstname"
            :lastname="contact.lastname"
            :age="contact.age"
            :email="contact.email"
            :companyname="contact.companyname"
        /></b-col>
      </b-row>
    </b-container>
    <div class="add-contact-button">
      <b-icon-plus
        style="cursor:pointer;"
        variant="primary"
        font-scale="2"
        @click="showModal"
      ></b-icon-plus>
    </div>
    <b-modal
      ref="add-modal"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      title="Add Contact"
      id="add-modal-closing"
    >
      <form  ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="First Name"
          label-for="firstname-input"
          invalid-feedback="First Name is required"
          :state="lastnameState"
        >
          <b-form-input
            id="firstname-input"
            v-model="contactEmpty.firstname"
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
            v-model="contactEmpty.lastname"
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
            v-model="contactEmpty.age"
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
            v-model="contactEmpty.email"
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
            v-model="contactEmpty.companyname"
            :state="companynameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import ContactCard from "../components/ContactCard.vue";

export default {
  name: "Home",
  components: {
    ContactCard,
  },
  data() {
    return {
      contactEmpty: {
        firstname: "",
        lastname: "",
        age: null,
        email: "",
        companyname: "",
      },
      firstnameState: null,
      lastnameState: null,
      ageState: null,
      emailState: null,
      companynameState: null,
      sort: 1,
      sorts: [
        { value: 1, text: "age" },
        { value: 2, text: "company name" },
      ],
    };
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  },
  methods: {
    showModal() {
      this.$refs["add-modal"].show();
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.firstnameState = valid;
      return valid;
    },
    resetModal() {
      this.contactEmpty.firstname = "";
      this.contactEmpty.lastname = "";
      this.contactEmpty.age = null;
      this.contactEmpty.email = "";
      this.contactEmpty.companyname = "";
      this.firstnameState = null;
      this.lastnameState = null;
      this.ageState = null;
      this.emailState = null;
      this.companynameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      this.$store.dispatch("addContact", Object.assign({}, this.contactEmpty));
      this.$refs["add-modal"].hide();
      this.$nextTick(() => {
        this.$bvModal.hide("add-modal-closing");
      });
    },
  },
};
</script>
<style scoped>
.add-contact-button {
  position: sticky;
  bottom: 10px;
  left: 10px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #0d6efd;
}
.add-contact-button:hover {
  background-color: #0d6dfd2d;
}
</style>
