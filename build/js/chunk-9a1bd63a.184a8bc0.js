(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a1bd63a"],{"0fa6":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var r=i("e92d"),s=i("b2b2"),n=i("d17d"),c=i("8539");const a=r["a"].getLogger("esri.views.webgl.VertexArrayObject");class o{constructor(t,e,i,r,s=null){this._context=t,this._locations=e,this._layout=i,this._buffers=r,this._indexBuffer=s,this._glName=null,this._initialized=!1,t.instanceCounter.increment(n["t"].VertexArrayObject,this)}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce((t,e)=>t+this._buffers[e].size,Object(s["k"])(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(t=!0){if(this._context){if(this._glName){var e,i;const t=null==(e=this._context)||null==(i=e.capabilities)?void 0:i.vao;t?(t.deleteVertexArray(this._glName),this._glName=null):a.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),t){for(const t in this._buffers)this._buffers[t].dispose(),delete this._buffers[t];this._indexBuffer=Object(s["e"])(this._indexBuffer)}this._context.instanceCounter.decrement(n["t"].VertexArrayObject,this),this._context=null}else(this._glName||t&&Object.getOwnPropertyNames(this._buffers).length>0)&&a.warn("Leaked WebGL VAO")}initialize(){if(this._initialized)return;const t=this._context.capabilities.vao;if(t){const e=t.createVertexArray();t.bindVertexArray(e),this._bindLayout(),t.bindVertexArray(null),this._glName=e}this._initialized=!0}bind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:t,_layout:e,_indexBuffer:i}=this;t||a.error("Vertex buffer dictionary is empty!");const r=this._context.gl;for(const s in t){const i=t[s];i||a.error("Vertex buffer is uninitialized!");const r=e[s];r||a.error("Vertex element descriptor is empty!"),Object(c["a"])(this._context,this._locations,i,r)}Object(s["k"])(i)&&(this._context.capabilities.vao?r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i))}unbind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:t,_layout:e}=this;t||a.error("Vertex buffer dictionary is empty!");for(const i in t){const r=t[i];r||a.error("Vertex buffer is uninitialized!");const s=e[i];Object(c["e"])(this._context,this._locations,r,s)}Object(s["k"])(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}},"7ce4":function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var r=i("b50f"),s=i("e92d"),n=i("b2b2"),c=i("a21b"),a=i("1956"),o=i("cc15"),h=i("d17d");const _=s["a"].getLogger("esri.views.webgl.BufferObject");function u(t){return Object(r["f"])(t)}class l{constructor(t,e,i,r){this._context=t,this.bufferType=e,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(h["t"].BufferObject,this),this._glName=this._context.gl.createBuffer(),Object(a["a"])(this._context.gl),r&&this.setData(r)}static createIndex(t,e,i){return new l(t,h["d"].ELEMENT_ARRAY_BUFFER,e,i)}static createVertex(t,e,i){return new l(t,h["d"].ARRAY_BUFFER,e,i)}static createUniform(t,e,i){if(t.type!==o["a"].WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new l(t,h["d"].UNIFORM_BUFFER,e,i)}static createPixelPack(t,e=h["D"].STREAM_READ,i){if(t.type!==o["a"].WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const r=new l(t,h["d"].PIXEL_PACK_BUFFER,e);return i&&r.setSize(i),r}static createPixelUnpack(t,e=h["D"].STREAM_DRAW,i){if(t.type!==o["a"].WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new l(t,h["d"].PIXEL_UNPACK_BUFFER,e,i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return this.bufferType===h["d"].ELEMENT_ARRAY_BUFFER?this._indexType===h["k"].UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===h["d"].ELEMENT_ARRAY_BUFFER||this.bufferType===h["d"].ARRAY_BUFFER}dispose(){var t;null!=(t=this._context)&&t.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(h["t"].BufferObject,this),this._context=null):this._glName&&_.warn("Leaked WebGL buffer object")}setSize(t,e=null){if(t<=0&&_.error("Buffer size needs to be positive!"),this.bufferType===h["d"].ELEMENT_ARRAY_BUFFER&&Object(n["k"])(e))switch(this._indexType=e,e){case h["k"].UNSIGNED_SHORT:t*=2;break;case h["k"].UNSIGNED_INT:t*=4}this._setBufferData(t)}setData(t){if(!t)return;let e=t.byteLength;this.bufferType===h["d"].ELEMENT_ARRAY_BUFFER&&(Object(c["i"])(t)&&(e/=2,this._indexType=h["k"].UNSIGNED_SHORT),Object(c["j"])(t)&&(e/=4,this._indexType=h["k"].UNSIGNED_INT)),this._setBufferData(e,t)}_setBufferData(t,e=null){this._size=t;const i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const r=this._context.gl;Object(n["k"])(e)?r.bufferData(this.bufferType,e,this.usage):r.bufferData(this.bufferType,t,this.usage),Object(a["a"])(r),this._isVAOAware&&this._context.bindVAO(i)}setSubData(t,e=0,i=0,r=t.byteLength){if(!t)return;(e<0||e>=this._size)&&_.error("offset is out of range!");let s=e,n=i,o=r,u=t.byteLength;this.bufferType===h["d"].ELEMENT_ARRAY_BUFFER&&(Object(c["i"])(t)?(u/=2,s*=2,n*=2,o*=2):Object(c["j"])(t)&&(u/=4,s*=4,n*=4,o*=4)),void 0===r&&(r=u-1),i>=r&&_.error("end must be bigger than start!"),e+i-r>this._size&&_.error("An attempt to write beyond the end of the buffer!");const l=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const f=this._context.gl,d=ArrayBuffer.isView(t)?t.buffer:t,E=0===n&&o===t.byteLength?d:d.slice(n,o);f.bufferSubData(this.bufferType,s,E),Object(a["a"])(f),this._isVAOAware&&this._context.bindVAO(l)}setSubDataFromView(t,e,i,r){if(!t)return;(e<0||e>=this._size)&&_.error("offset is out of range!"),i>=r&&_.error("end must be bigger than start!"),e+i-r>this._size&&_.error("An attempt to write beyond the end of the buffer!");const s=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const n=this._context.gl;if(this._context.type===o["a"].WEBGL2)n.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,t,i,r-i);else{const s=0===i&&r===t.length?t:t.subarray(i,r);n.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,s)}Object(a["a"])(n),this._isVAOAware&&this._context.bindVAO(s)}getSubData(t,e=0,i,r){if(this._context.type!==o["a"].WEBGL2)return void _.error("Get buffer subdata is supported in WebGL2 only!");if(i<0||r<0)return void _.error("Problem getting subdata: offset and length were less than zero!");const s=u(t)?t.BYTES_PER_ELEMENT:1;if(s*((null!=i?i:0)+(null!=r?r:0))>t.byteLength)return void _.error("Problem getting subdata: offset and length exceeded destination size!");e+s*(null!=r?r:0)>this.byteSize&&_.warn("Potential problem getting subdata: requested data exceeds buffer size!");const n=this._context.gl;this._context.bindBuffer(this,h["d"].COPY_READ_BUFFER),n.getBufferSubData(h["d"].COPY_READ_BUFFER,e,t,i,r),this._context.unbindBuffer(h["d"].COPY_READ_BUFFER)}async getSubDataAsync(t,e=0,i,r){this._context.type===o["a"].WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(t,e,i,r)):_.error("Get buffer subdata is supported in WebGL2 only!")}}},8539:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return _})),i.d(e,"c",(function(){return n})),i.d(e,"d",(function(){return u})),i.d(e,"e",(function(){return h})),i.d(e,"f",(function(){return c}));i("c120");var r=i("b2b2"),s=i("d17d");function n(t){const e=t.gl;switch(e.getError()){case e.NO_ERROR:return null;case e.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case e.INVALID_VALUE:return"A numeric argument is out of range";case e.INVALID_OPERATION:return"The specified command is not allowed for the current state";case e.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case e.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case e.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function c(t,e){return t.vertexBuffers[e].size/a(t.layout[e])}function a(t){return t[0].stride}function o(t,e,i,r,s=0){const n=t.gl,c=t.capabilities.instancing;t.bindBuffer(i);for(const a of r){const t=e.get(a.name);void 0===t&&console.error(`There is no location for vertex attribute '${a.name}' defined.`);const i=s*a.stride;if(a.count<=4)n.vertexAttribPointer(t,a.count,a.type,a.normalized,a.stride,a.offset+i),n.enableVertexAttribArray(t),a.divisor>0&&c&&c.vertexAttribDivisor(t,a.divisor);else if(9===a.count)for(let e=0;e<3;e++)n.vertexAttribPointer(t+e,3,a.type,a.normalized,a.stride,a.offset+12*e+i),n.enableVertexAttribArray(t+e),a.divisor>0&&c&&c.vertexAttribDivisor(t+e,a.divisor);else if(16===a.count)for(let e=0;e<4;e++)n.vertexAttribPointer(t+e,4,a.type,a.normalized,a.stride,a.offset+16*e+i),n.enableVertexAttribArray(t+e),a.divisor>0&&c&&c.vertexAttribDivisor(t+e,a.divisor);else console.error("Unsupported vertex attribute element count: "+a.count)}}function h(t,e,i,r){const n=t.gl,c=t.capabilities.instancing;t.bindBuffer(i);for(const s of r){const t=e.get(s.name);if(s.count<=4)n.disableVertexAttribArray(t),s.divisor&&s.divisor>0&&c&&c.vertexAttribDivisor(t,0);else if(9===s.count)for(let e=0;e<3;e++)n.disableVertexAttribArray(t+e),s.divisor&&s.divisor>0&&c&&c.vertexAttribDivisor(t+e,0);else if(16===s.count)for(let e=0;e<4;e++)n.disableVertexAttribArray(t+e),s.divisor&&s.divisor>0&&c&&c.vertexAttribDivisor(t+e,0);else console.error("Unsupported vertex attribute element count: "+s.count)}t.unbindBuffer(s["d"].ARRAY_BUFFER)}function _(t){switch(t){case s["p"].ALPHA:case s["p"].LUMINANCE:case s["p"].RED:case s["p"].RED_INTEGER:case s["v"].R8:case s["v"].R8I:case s["v"].R8UI:case s["v"].R8_SNORM:case s["s"].STENCIL_INDEX8:return 1;case s["p"].LUMINANCE_ALPHA:case s["p"].RG:case s["p"].RG_INTEGER:case s["v"].RGBA4:case s["v"].R16F:case s["v"].R16I:case s["v"].R16UI:case s["v"].RG8:case s["v"].RG8I:case s["v"].RG8UI:case s["v"].RG8_SNORM:case s["v"].RGB565:case s["v"].RGB5_A1:case s["s"].DEPTH_COMPONENT16:return 2;case s["p"].DEPTH_COMPONENT:case s["p"].RGB:case s["p"].RGB_INTEGER:case s["v"].RGB8:case s["v"].RGB8I:case s["v"].RGB8UI:case s["v"].RGB8_SNORM:case s["v"].SRGB8:case s["s"].DEPTH_COMPONENT24:return 3;case s["p"].DEPTH_STENCIL:case s["p"].RGBA:case s["p"].RGBA_INTEGER:case s["v"].RGBA8:case s["v"].R32F:case s["v"].R11F_G11F_B10F:case s["v"].RG16F:case s["v"].R32I:case s["v"].R32UI:case s["v"].RG16I:case s["v"].RG16UI:case s["v"].RGBA8I:case s["v"].RGBA8UI:case s["v"].RGBA8_SNORM:case s["v"].SRGB8_ALPHA8:case s["v"].RGB9_E5:case s["v"].RGB10_A2UI:case s["v"].RGB10_A2:case s["s"].DEPTH_STENCIL:case s["s"].DEPTH_COMPONENT32F:case s["s"].DEPTH24_STENCIL8:return 4;case s["s"].DEPTH32F_STENCIL8:return 5;case s["v"].RGB16F:case s["v"].RGB16I:case s["v"].RGB16UI:return 6;case s["v"].RG32F:case s["v"].RG32I:case s["v"].RG32UI:case s["v"].RGBA16F:case s["v"].RGBA16I:case s["v"].RGBA16UI:return 8;case s["v"].RGB32F:case s["v"].RGB32I:case s["v"].RGB32UI:return 12;case s["v"].RGBA32F:case s["v"].RGBA32I:case s["v"].RGBA32UI:return 16;case s["i"].COMPRESSED_RGB_S3TC_DXT1_EXT:case s["i"].COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case s["i"].COMPRESSED_RGBA_S3TC_DXT3_EXT:case s["i"].COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case s["i"].COMPRESSED_R11_EAC:case s["i"].COMPRESSED_SIGNED_R11_EAC:case s["i"].COMPRESSED_RGB8_ETC2:case s["i"].COMPRESSED_SRGB8_ETC2:case s["i"].COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case s["i"].COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case s["i"].COMPRESSED_RG11_EAC:case s["i"].COMPRESSED_SIGNED_RG11_EAC:case s["i"].COMPRESSED_RGBA8_ETC2_EAC:case s["i"].COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function u(t){if(Object(r["j"])(t))return 0;if("descriptor"in t)return t.glName?u(t.descriptor):0;const e=t.internalFormat||"pixelFormat"in t&&t.pixelFormat;if(!e)return 0;const i="hasMipmap"in t&&t.hasMipmap?1.3:1,s=t.width*t.height;return _(e)*s*i}},"91b0c":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var r=i("cc15"),s=i("d17d");class n{constructor(t,e){this._context=t,this._desc=e,this.type="renderbuffer",this._context.instanceCounter.increment(s["t"].Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:n,height:c,internalFormat:a,multisampled:o}=e;if(o){if(this._context.type!==r["a"].WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,a,n,c)}else i.renderbufferStorage(i.RENDERBUFFER,a,n,c)}get descriptor(){return this._desc}get samples(){const t=this._desc.samples,e=this._context.parameters.maxSamples;return t?Math.min(t,e):e}resize(t,e){const i=this._desc;if(i.width===t&&i.height===e)return;i.width=t,i.height=e;const r=this._context.gl;this._context.bindRenderbuffer(this),i.multisampled?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,i.internalFormat,i.width,i.height):r.renderbufferStorage(r.RENDERBUFFER,i.internalFormat,i.width,i.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(s["t"].Renderbuffer,this),this._context=null)}}},d267:function(t,e,i){"use strict";i.d(e,"a",(function(){return f}));var r=i("e92d"),s=i("b2b2"),n=i("7ce4"),c=i("1956"),a=i("cc15"),o=i("d17d"),h=i("91b0c"),_=i("a1ff"),u=i("8539");const l=r["a"].getLogger("esri.views.webgl.FrameBufferObject");class f{constructor(t,e,i=null,r=null){if(this._context=t,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc={...e},t.instanceCounter.increment(o["t"].FramebufferObject,this),Object(s["k"])(i)){Array.isArray(i)||(i=[i]);for(let t=0;t<i.length;++t){const e=i[t],r=o["g"].COLOR_ATTACHMENT0+t;let s;T(e)?(d(e)?(s=e.descriptor,this._colorAttachments.set(r,e)):(s=e,this._colorAttachments.set(r,new _["a"](this._context,s))),R(s,this._desc)):(E(e)?(s=e.descriptor,this._colorAttachments.set(r,e)):(s=e,this._colorAttachments.set(r,new h["a"](this._context,s))),A(s,this._desc)),this._validateColorAttachmentPoint(r)}}if(Object(s["k"])(r)){let t,e;if(T(r))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),d(r)?(e=r.descriptor,this._depthStencilTexture=r):(e=r,this._depthStencilTexture=new _["a"](this._context,e)),R(e,this._desc);else{var n;E(r)?(e=r.descriptor,t=r):(e=r,t=new h["a"](this._context,e));const i=null!=(n=this._desc.depthStencilTarget)?n:o["m"].DEPTH_STENCIL_RENDER_BUFFER;i===o["m"].STENCIL_RENDER_BUFFER?this._stencilAttachment=t:i===o["m"].DEPTH_RENDER_BUFFER||i===o["m"].DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=t:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),A(e,this._desc)}}}dispose(){if(!this._desc)return;const t=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(o["t"].FramebufferObject,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const t=this._colorAttachments.get(o["g"].COLOR_ATTACHMENT0);return t&&d(t)?t:null}get colorAttachment(){return this._colorAttachments.get(o["g"].COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}get gpuMemoryUsage(){return[...this._colorAttachments].reduce((t,[e,i])=>t+Object(u["d"])(i),0)+Object(u["d"])(this.depthStencilAttachment)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&d(e)?e:null}attachColorTexture(t,e=o["g"].COLOR_ATTACHMENT0){t&&(this._validateColorAttachmentPoint(e),R(t.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t))}detachColorTexture(t=o["g"].COLOR_ATTACHMENT0){const e=this._colorAttachments.get(t);if(d(e)){const i=e;return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t)),this._colorAttachments.delete(t),i}}setColorTextureTarget(t,e=o["g"].COLOR_ATTACHMENT0){const i=this._colorAttachments.get(e);d(i)&&this._framebufferTexture2D(i.glName,e,t)}attachDepthStencilTexture(t){if(Object(s["j"])(t))return;const e=t.descriptor;e.pixelFormat!==o["p"].DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==o["q"].UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),R(e,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==o["m"].DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=o["m"].DEPTH_STENCIL_TEXTURE),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,o["l"])),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;return t&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,o["l"])),this._depthStencilTexture=null,t}attachDepthStencilBuffer(t){if(Object(s["j"])(t))return;const e=t.descriptor;if(e.internalFormat!==o["s"].DEPTH_STENCIL&&e.internalFormat!==o["s"].DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),A(e,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=e.internalFormat===o["s"].DEPTH_STENCIL?o["m"].DEPTH_STENCIL_RENDER_BUFFER:o["m"].DEPTH_RENDER_BUFFER,this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,i=this._desc.depthStencilTarget===o["m"].DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(o["o"].FRAMEBUFFER,i,e.RENDERBUFFER,t.glName)}this._depthAttachment=t}detachDepthStencilBuffer(){const t=this._context.gl,e=this._depthAttachment;if(e&&this._initialized){this._context.bindFramebuffer(this);const e=this._desc.depthStencilTarget===o["m"].DEPTH_RENDER_BUFFER?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(o["o"].FRAMEBUFFER,e,t.RENDERBUFFER,null)}return this._depthAttachment=null,e}detachAll(){this._colorAttachments.forEach((t,e)=>this._detachColorAttachment(e)),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(t,e,i,r,s,n,c){(t<0||e<0||s<0||n<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");const a=this._desc,h=c.descriptor;c.descriptor.target!==o["A"].TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(t+i>a.width||e+r>a.height||s+i>h.width||n+r>h.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const u=this._context,l=u.bindTexture(c,_["a"].TEXTURE_UNIT_FOR_UPDATES);u.setActiveTexture(_["a"].TEXTURE_UNIT_FOR_UPDATES),u.bindFramebuffer(this),u.gl.copyTexSubImage2D(o["A"].TEXTURE_2D,0,s,n,t,e,i,r),u.bindTexture(l,_["a"].TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,i,r,s,n,c){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),c||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,i,r,s,n,c)}async readPixelsAsync(t,e,i,r,s,h,_){if(this._context.type!==a["a"].WEBGL2)return Object(c["b"])()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(t,e,i,r,s,h,_);const u=this._context.gl,l=n["a"].createPixelPack(this._context,o["D"].STREAM_READ,_.byteLength);this._context.bindBuffer(l),this._context.bindFramebuffer(this),u.readPixels(t,e,i,r,s,h,0),this._context.unbindBuffer(o["d"].PIXEL_PACK_BUFFER),await l.getSubDataAsync(_),l.dispose()}resize(t,e){const i=this._desc;if(i.width!==t||i.height!==e){if(!this._initialized)return i.width=t,i.height=e,this._colorAttachments.forEach(i=>{i&&i.resize(t,e)}),void(this._depthStencilTexture&&this._depthStencilTexture.resize(t,e));i.width=t,i.height=e,this._colorAttachments.forEach(i=>{i&&i.resize(t,e)}),null!=this._depthStencilTexture?this._depthStencilTexture.resize(t,e):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(t,e),this._stencilAttachment&&this._stencilAttachment.resize(t,e)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(t=o["o"].FRAMEBUFFER){var e,i,r,s;const n=this._context.gl;if(this._initialized)return void n.bindFramebuffer(t,this.glName);this._glName&&n.deleteFramebuffer(this._glName);const a=this._context,u=n.createFramebuffer(),l=this._desc,f=null!=(e=l.colorTarget)?e:o["y"].RENDER_BUFFER,E=null!=(i=l.width)?i:1,T=null!=(r=l.height)?r:1;if(n.bindFramebuffer(t,u),0===this._colorAttachments.size)if(f===o["y"].TEXTURE||f===o["y"].CUBEMAP)this._colorAttachments.set(o["g"].COLOR_ATTACHMENT0,b(a,l,this.descriptor.colorTarget===o["y"].CUBEMAP?o["A"].TEXTURE_CUBE_MAP:o["A"].TEXTURE_2D));else{const t=new h["a"](a,{internalFormat:o["v"].RGBA4,width:E,height:T});this._colorAttachments.set(o["g"].COLOR_ATTACHMENT0,t)}this._colorAttachments.forEach((e,i)=>{e&&(d(e)?this._framebufferTexture2D(e.glName,i,m(e),t):n.framebufferRenderbuffer(t,i,n.RENDERBUFFER,e.glName))});const R=null!=(s=l.depthStencilTarget)?s:o["m"].NONE;switch(R){case o["m"].DEPTH_RENDER_BUFFER:case o["m"].DEPTH_STENCIL_RENDER_BUFFER:{this._depthAttachment||(this._depthAttachment=new h["a"](a,{internalFormat:l.depthStencilTarget===o["m"].DEPTH_RENDER_BUFFER?o["s"].DEPTH_COMPONENT16:o["s"].DEPTH_STENCIL,width:E,height:T}));const e=R===o["m"].DEPTH_RENDER_BUFFER?n.DEPTH_ATTACHMENT:n.DEPTH_STENCIL_ATTACHMENT;n.framebufferRenderbuffer(t,e,n.RENDERBUFFER,this._depthAttachment.glName);break}case o["m"].STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new h["a"](a,{internalFormat:o["s"].STENCIL_INDEX8,width:E,height:T})),n.framebufferRenderbuffer(t,n.STENCIL_ATTACHMENT,n.RENDERBUFFER,this._stencilAttachment.glName);break;case o["m"].DEPTH_STENCIL_TEXTURE:if(!this._depthStencilTexture){a.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const t={target:o["A"].TEXTURE_2D,pixelFormat:o["p"].DEPTH_STENCIL,dataType:o["q"].UNSIGNED_INT_24_8,samplingMode:o["z"].NEAREST,wrapMode:o["B"].CLAMP_TO_EDGE,width:E,height:T};this._depthStencilTexture=new _["a"](a,t)}this._framebufferTexture2D(this._depthStencilTexture.glName,n.DEPTH_STENCIL_ATTACHMENT,m(this._depthStencilTexture),t)}Object(c["c"])()&&n.checkFramebufferStatus(t)!==n.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=u,this._initialized=!0}_framebufferTexture2D(t,e=o["g"].COLOR_ATTACHMENT0,i=o["A"].TEXTURE_2D,r=o["o"].FRAMEBUFFER,s=0){this._context.gl.framebufferTexture2D(r,e,i,t,s)}_detachColorAttachment(t){Object(c["b"])()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");const e=this._context.gl,i=this._colorAttachments.get(t);return d(i)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t)):this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(o["o"].FRAMEBUFFER,t,e.RENDERBUFFER,null)),this._colorAttachments.delete(t),i}_disposeColorAttachments(){this._colorAttachments.forEach((t,e)=>{this._detachColorAttachment(e),t.dispose()}),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const e=this._desc.depthStencilTarget===o["m"].DEPTH_RENDER_BUFFER?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(o["o"].FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(o["o"].FRAMEBUFFER,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateColorAttachmentPoint(t){if(-1===f._MAX_COLOR_ATTACHMENTS){const t=this._context.capabilities.drawBuffers;if(t){const e=this._context.gl;f._MAX_COLOR_ATTACHMENTS=e.getParameter(t.MAX_COLOR_ATTACHMENTS)}else f._MAX_COLOR_ATTACHMENTS=1}const e=t-o["g"].COLOR_ATTACHMENT0;e+1>f._MAX_COLOR_ATTACHMENTS&&l.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${f._MAX_COLOR_ATTACHMENTS} color attachments`)}}function d(t){return"type"in t&&"texture"===t.type}function E(t){return"type"in t&&"renderbuffer"===t.type}function T(t){return d(t)||"pixelFormat"in t}function b(t,e,i){return new _["a"](t,{target:i,pixelFormat:o["p"].RGBA,dataType:o["q"].UNSIGNED_BYTE,samplingMode:o["z"].NEAREST,wrapMode:o["B"].CLAMP_TO_EDGE,width:e.width,height:e.height})}function R(t,e){t.target!==o["A"].TEXTURE_2D&&t.target!==o["A"].TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Color attachment texture must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}function A(t,e){void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}function m(t){return t.descriptor.target===o["A"].TEXTURE_CUBE_MAP?o["A"].TEXTURE_CUBE_MAP_POSITIVE_X:o["A"].TEXTURE_2D}f._MAX_COLOR_ATTACHMENTS=-1}}]);
//# sourceMappingURL=chunk-9a1bd63a.184a8bc0.js.map