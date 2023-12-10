# Minimalist CSS
A minimalist CSS framework for building simple websites.

## Requirements
1. PHP (Must have for the dev server)

## Running the project
1. make start

## Building the project
1. make build

## Usage

### mini-drawer-layout
```html
<!-- noJs class will be removed if javascript is enabled -->
<mini-drawer-layout class="noJs">
    <!-- main content -->
    <main>
        <!-- I'm just here to create a toggle handle -->
        <button>Toggle</button>
    </main>
    <!-- drawer content -->
   <nav slot="drawer">
        <h1>My Site</h1>
    </nav>
</mini-drawer-layout>
<script>
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('mini-drawer-layout')?.toggleDrawer();
});
</script>
<!-- Recommended styles for fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
```
