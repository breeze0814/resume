<script lang="ts">
  export let projects: Project[];
</script>

<section class="project info-unit">
  <h2>
    <i class="fa fa-terminal" aria-hidden="true" />项目经历
  </h2>
  <hr />
  <ul>
    {#each projects as item}
      <li>
        <h3>
          <span>{item.title}</span>
          {#if item.demoLink}
            <span class="link">
              <a href={item.demoLink} target="_blank"
                >{item.demoName || "Demo"}</a
              >
            </span>
          {/if}
          <time>{item.startTime}-{item.endTime}</time>
        </h3>
        <ul class="info-content">
           <li>
            <i class="fa fa-thumbs-o-up" aria-hidden="true" />
           <strong> [背景]{item.background}</strong>
          </li>
          <li>
            <i class="fa fa-paper-plane-o" aria-hidden="true" /><strong
              >技术栈：{item.skill}</strong
            >
          </li>
         
          {#each item.result as htmlText}
            {#if typeof htmlText === "string"}
              <li>
                <i class="fa fa-paper-plane-o" aria-hidden="true" />

                { @html htmlText}
              </li>
              <!-- <p><strong>{@html htmlText}</strong></p> -->
            {:else if Array.isArray(htmlText)}
              <ul>
                {#each htmlText as innerText}
                  <li>{@html innerText}</li>
                {/each}
              </ul>
            {/if}
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</section>
