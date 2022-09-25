---
icon: file-symlink-file
order: 96
---

# Bindings

_Saucer_ has a C-Wrapper, which can be used to build [FFI](https://en.wikipedia.org/wiki/Foreign_function_interface)-Wrappers in other languages.

Also, the [C-Library Header](https://github.com/saucer/saucer/blob/dev/shared/exports.hpp) is fully [SWIG](https://www.swig.org/) friendly, which means you can fairly easy let <kbd>SWIG</kbd> lay the ground work when creating Language Bindings.

---

## Creating a Wrapper

We won't fully go into detail here, as people who plan to build FFI-Bindings should already know enough to build bindings by looking at the previously linked header file.

However, a few things worth mentioning are:
* The C-Library expects all strings to be allocated by the caller, and will not delete any strings itself.
* For every object that requires manual cleanup a `_free` function exists.
* For information on [Events](../Getting-Started/Events.md) and [Serializers](Serializers.md) please check the relevant pages of this documentation respectively.
* Please avoid calling functions that expect a `callback` more than once, instead design your wrapper in such a way that you only have to register each callback **once**.
* The Serializer expects data that is no longer tan <kbd>2048 Bytes</kbd> from the `serialize_callback` by default, you can raise this limit by calling `serializer_set_buffer_size`.