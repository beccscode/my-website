<template>
    <header>
      <img alt="Vue logo" src="../assets/logo.svg" height="50">
      <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/about">Projects</router-link></li>
      </ul>
    </nav>
    </header>
  </template>

<style lang="scss">
     header {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 1rem;
    background-color: black;

    p {
      margin-left: 1rem;
    }
  }

  nav {
    margin-left: auto;

    ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin-left: 1rem;
    }
  }
</style>