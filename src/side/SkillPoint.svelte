<script lang="ts">
  export let skills: Skill[];
</script>

<section class="skill info-unit">
  <h2>
    <i class="fa fa-code" aria-hidden="true" />技能点
  </h2>
  <hr />
  <ul>
    {#each skills as item}
      <li>
       <strong>{item}</strong>
        <!-- <progress value={item.progress} max="100" /> -->
      </li>
    {/each}
  </ul>
</section>
