<template>
  <div class="profile-selector-wrapper">
    <figure class="image is-128x128">
      <img
        class="is-rounded"
        src="https://bulma.io/images/placeholders/128x128.png"
      />
    </figure>
    <div class="file has-name is-justify-content-center">
      <label class="file-label">
        <input class="file-input" type="file" name="resume" />
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label"> Choose a file… </span>
        </span>
        <span class="file-name"> Screen Shot 2017-07-29 at 15.54.25.png </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePicSelector",
};
</script>
