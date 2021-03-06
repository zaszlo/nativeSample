require("application");
if (!global["__snapshot"]) {
    // In case snapshot generation is enabled these modules will get into the bundle
    // but will not be required/evaluated.
    // The snapshot webpack plugin will add them to the tns-java-classes.js bundle file.
    // This way, they will be evaluated on app start as early as possible.
    require("ui/frame");
    require("ui/frame/activity");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLXBsYXRmb3JtLmFuZHJvaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3ItcGxhdGZvcm0uYW5kcm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLGdGQUFnRjtJQUNoRixzQ0FBc0M7SUFDdEMsb0ZBQW9GO0lBQ3BGLHNFQUFzRTtJQUV0RSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEIsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoXCJhcHBsaWNhdGlvblwiKTtcblxuaWYgKCFnbG9iYWxbXCJfX3NuYXBzaG90XCJdKSB7XG4gICAgLy8gSW4gY2FzZSBzbmFwc2hvdCBnZW5lcmF0aW9uIGlzIGVuYWJsZWQgdGhlc2UgbW9kdWxlcyB3aWxsIGdldCBpbnRvIHRoZSBidW5kbGVcbiAgICAvLyBidXQgd2lsbCBub3QgYmUgcmVxdWlyZWQvZXZhbHVhdGVkLlxuICAgIC8vIFRoZSBzbmFwc2hvdCB3ZWJwYWNrIHBsdWdpbiB3aWxsIGFkZCB0aGVtIHRvIHRoZSB0bnMtamF2YS1jbGFzc2VzLmpzIGJ1bmRsZSBmaWxlLlxuICAgIC8vIFRoaXMgd2F5LCB0aGV5IHdpbGwgYmUgZXZhbHVhdGVkIG9uIGFwcCBzdGFydCBhcyBlYXJseSBhcyBwb3NzaWJsZS5cblxuICAgIHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcbiAgICByZXF1aXJlKFwidWkvZnJhbWUvYWN0aXZpdHlcIik7XG59XG5cbiJdfQ==