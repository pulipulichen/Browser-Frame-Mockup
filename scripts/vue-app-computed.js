var appComputed = {
  currentFrame () {
    if (this.frameType === 'browser') {
      return this.$refs.BrowserFrame
    }
    else if (this.frameType === 'phone') {
      return this.$refs.PhoneFrame.$el
    }
    else if (this.frameType === 'phone-portrait') {
      return this.$refs.PhonePortraitFrame.$el
    }
    else if (this.frameType === 'phone-landscape') {
      return this.$refs.PhoneLandscapeFrame.$el
    }
    else if (this.frameType === 'tablet-landscape') {
      return this.$refs.TabletLandscapeFrame
    }
    else if (this.frameType === 'tablet-portrait') {
      return this.$refs.TabletPortraitFrame
    }
  },
  isDevice () {
    return (this.frameType !== 'browser')
  }
}
