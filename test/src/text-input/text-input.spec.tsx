import React from "react";
import { describe, expect, test } from "@jest/globals";
import { TextInput } from "../../../src/text-input/text-input";
import renderer from "react-test-renderer";

describe("Text Input", () => {
  describe("label", () => {
    describe("when the provided label is string", () => {
      test("renders with the provided label", () => {
        const component = renderer.create(<TextInput label="Test" />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe("when the provided label is ReactElement", () => {
      test("renders with the provided label", () => {
        const component = renderer.create(<TextInput label={<div>Test</div>} />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("controlled input", () => {
    describe("when value and onChange callback are provided", () => {
      test("renders with the provided value and callback", () => {
        const component = renderer.create(
          <TextInput
            label="Test"
            value="test"
            onChange={newValue => console.log(newValue)}
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("containerClassName", () => {
    describe("when containerClassName is provided", () => {
      test("renders with the provided containerClassName", () => {
        const component = renderer.create(
          <TextInput
            label="Test"
            value="test"
            onChange={newValue => console.log(newValue)}
            containerClassName="test"
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("id", () => {
    describe("when id is provided", () => {
      test("renders with the provided id", () => {
        const component = renderer.create(
          <TextInput
            id="test"
            label="Test"
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("disabled", () => {
    describe("when disabled is provided", () => {
      test("renders with the provided disabled", () => {
        const component = renderer.create(
          <TextInput
            disabled={true}
            label="Test"
          />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
