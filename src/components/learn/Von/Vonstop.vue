 <template>
  <div>
  
    <div @click="items.push('Parent')">
      Parent area

      <div @click.stop="items.push('Child')">
        Child area
      </div>
    </div>

    <hr>

    <ol>
      <li v-for="(x, index) in items" :key="index">{{ x }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  }
}
</script> 



