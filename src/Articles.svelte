<script>
  import { onDestroy } from "svelte";
  import store from "./Store.js";
  import Article from "./Article.svelte";

  let articles = [];
  let title = "Title";
  let author = "Author";

  // Get articles
  const unsubscribe = store.subscribe(data => {
    articles = data;
  });

  // Add article
  function addArticle() {
    const newArticle = {
      id: Date.now(),
      title,
      author
    };
    store.update(data => {
      return [...data, newArticle];
    });
  }

  // Remove article
  function removeArticle(event) {
    const articleToRemove = event.detail;
    let filteredList = articles.filter(item => item.id !== articleToRemove.id);
    store.set(filteredList);
  }

  // Destroy subscribe
  onDestroy(unsubscribe);
</script>

<h3>Add new article</h3>
<form on:submit|preventDefault={addArticle}>
  <input
    type="text"
    name="title"
    id="title"
    placeholder="Title"
    bind:value={title} />
  <br />
  <input
    type="text"
    name="author"
    id="author"
    placeholder="Author"
    bind:value={author} />
  <br />
  <button type="submit">Add</button>
</form>

<hr />

<h3>List article</h3>
{#each articles as article (article.id)}
  <Article
    {article}
    on:removeArticle={removeArticle}
    on:addArticle={addArticle} />
{/each}
